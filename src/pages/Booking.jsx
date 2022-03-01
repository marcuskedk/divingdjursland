import React, { useState, useEffect } from "react";
import { useHistory ,useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { getBookingCategory } from "../helpers/Request";

const Booking = () => {
  const location = useLocation()

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getBookingCategory().then((res) => {
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

  return (
    <section className="booking-page">
      <div className="container">

        <div className="row g-4">
          { loading && <div className="alert alert-warning"><div className="spinner-border spinner-custom" role="status"></div> Tjekker efter dykkesteder!</div> }
          {error &&
            <div className="col-12">
              <span>Der opstod en fejl</span>
            </div>
          }
          { !location.search && 
          <>
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Forside</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Dykkesteder</li>
                </ol>
              </nav>
            </div>
          </>
          }
          {data && data.map((index, item) => (
            <>
              { location.search == '?id=' + data[item]._id && 
              <>
                <div className="col-12" key={data[item]._id}>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Forside</a></li>
                      <li className="breadcrumb-item"><a href="/booking">Dykkesteder</a></li>
                      <li className="breadcrumb-item active" aria-current="page">{ data[item].title }</li>
                    </ol>
                  </nav>
                </div>
                <div className="col-12" key={item}>
                  <div className="card">
                    <div className="card-body row">
                      <div className="col-lg-4">
                        <img src={ "../img/" + data[item].img } className="card-img" alt="" />
                      </div>
                      <div className="col-lg-8">
                        <div className="row h-100">
                          <div className="col-lg-8">
                            <h2 className="m-0 fw-bold">{ data[item].title }</h2>
                            <p>{ data[item].description }</p>
                            <p className="m-0 my-1"><b>Dybde:</b> { data[item].depth }</p>
                            <p className="m-0 my-1"><b>Dybde:</b> { data[item].depth }</p>
                            <p className="m-0 my-1"><b>Tider:</b> { data[item].time }</p>
                          </div>
                          <div className="col-lg-4 position-relative">
                            <div className="text-lg-end">
                              <p className="m-0 my-1"><b>Antal:</b> { data[item].amount } ud { data[item].max_amount } tilmeldte</p>
                            </div>
                            <div className="position-custom">
                              <p className="text-success text-center fw-bold fs-5">{ data[item].price }</p>
                              <a href="" className="button button-success d-block text-center">Tilmeld</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              }
              { !location.search && 
              <>
                <div className="col-lg-4" key={item}>
                  <a className="card" href={"booking?id=" + data[item]._id }>
                    <div className="card-header">{ data[item].title }</div>
                    <img src={ "../img/" + data[item].img } className="card-img" alt="" />
                  </a>
                </div>
              </>
              }
            </>
          ))}
        </div>

        {/* <a href="/"></a>
        <div className="tour_card">
          <div className="tour_img">
            <h3 className="tour_headline">
              Strandklit{" "}
              <span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </span>
            </h3>
            <img src="../img/IMG_20190726_122436_1.jpg" alt="" />
          </div>

          <div className="tour_info">
            <p>Båddyk</p>
            <p>Sted</p>
            <p>Båddyk</p>
            <p>pris</p>
            <p>Ledigepladser</p>
          </div>
        </div>

        <a href="/"></a>
        <div className="tour_card">
          <div className="tour_img">
            <h3 className="tour_headline">
              Strandklit{" "}
              <span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </span>
            </h3>
            <img src="../img/IMG_20190806_152625_1.jpg" alt="" />
          </div>

          <div className="tour_info"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Booking;
