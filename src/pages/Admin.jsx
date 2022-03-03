import React, { useState, useEffect } from "react";
import { useHistory ,useLocation } from 'react-router-dom';
import { getBookingCategory, getBooking } from "../helpers/Request";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faExclamationCircle, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


import Modal from "./Modal";

const Admin = () => {
  const location = useLocation()

  const [allData, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getBooking().then((res) => {
        if (res) {
          // console.log(res);
          setData(res);
          setError(false);
        } else {
          setData();
          setError(true);
        }
      })
      .finally(setLoading(false));
    }, 500);
  }, []);

  const [open, setOpen] = useState(false);
  const [Index, setIndex] = useState(0);

  const openModal = (e) => {
    setOpen(true)
    setIndex(e.currentTarget.dataset.index);
  }

  // console.log(allData)
  const closeModal = () => {
    setOpen(false);
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row g-4 justify-content-center">
            { location.search == "?page=dashboard" && 
              <>
                { loading && <div className="alert alert-warning"><div className="spinner-border spinner-custom" role="status"></div> Tjekker efter dykkesteder!</div> }
                {error &&
                  <div className="col-12">
                    <span>Der opstod en fejl</span>
                  </div>
                }
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <p>hello</p>
                    </div>
                  </div>
                </div>
              </>
            }
            { location.search == "?page=registration-awaiting" && 
              <>
              { loading && <div className="alert alert-warning"><div className="spinner-border spinner-custom" role="status"></div> Tjekker efter dykkesteder!</div> }
              {error &&
                <div className="col-12">
                  <span>Der opstod en fejl</span>
                </div>
              }
              <div className="col-12">
                <div className="table-sorter row my-1 g-1">
                  <div className="col-lg-8">
                    <input type="search" className="form-control" placeholder="Søg..." />
                  </div>
                  <div className="col-lg-4">
                    <select name="" id="" className="form-select">
                      <option value="" selected>Alle</option>
                      <option value="">Greve - Strand</option>
                      <option value="">Kysten - Båd</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive">
                <Modal
                    moreTxt={allData}
                    ids={Index}
                    isOpen={open}
                    onClose={closeModal}
                  />
                  <table className="BookingTabel">
                    <thead>
                      <tr className="TableHeadline">
                        <th>Navn:</th>
                        <th>Email:</th>
                        <th>Status:</th>
                        <th>Oplysninger:</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allData && allData.map((strings, id) => (
                        <tr key={id}>
                          <td>{ allData[id].firstname + " " + allData[id].lastname }</td>
                          <td>{ allData[id].email }</td>
                          <td>{ allData[id].status }</td>
                          <td> 
                          <button  type="button" className="accept" > <FontAwesomeIcon icon={faCheckCircle} /> </button>
                          <button  type="button" className="decline" > <FontAwesomeIcon icon={faTimesCircle} /> </button>
                            <button type="button" data-index={allData[id]._id} onClick={openModal} className="InfoButton"> <FontAwesomeIcon icon={faExclamationCircle} /></button>
                          
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              
                </div>
              </div>
              </>
            }
          </div>
        </div>
      </section>
      { open && <div className="modal-open"></div> }
    </>
  );
};

export default Admin;
