import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { getBookingCategory, getBooking } from "../helpers/Request";


const Background = styled.div`
    width: 100vw;
    height 100vh;
    background-color: #83838334;
    postion: fixed;
    top: 0;
    left: 0;
`

const Modal = ({ ids, isOpen, onClose }) => {

  const [allData, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    // setTimeout(() => {
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
    // }, 500);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal" id="modal">
      <div className="closeContainer">
        <div onClick={onClose}> <FontAwesomeIcon icon={faTimes}/> </div>
      </div>
      { allData.map((strings, id) => (
        <div className="modal-body" key={id}>
          { allData[id]._id == ids && 
            <>
              <div className="modal-title">
                <h3>{ allData[id].firstname }</h3>
              </div>
              <div className="modal-text">
                <p>{ allData[id].firstname }</p>
                <p>{ allData[id].lastname }</p>
              </div>
            </>
          }
        </div>
      )) }
    </div>
  );
};

export default Modal