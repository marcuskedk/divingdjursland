import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { getBookingCategory, getBooking } from "../helpers/Request";
import locales from "../helpers/locales.json";

const Background = styled.div`
    width: 100vw;
    height 100vh;
    background-color: #83838334;
    postion: fixed;
    top: 0;
    left: 0;
`

const Modal = ({ ids, isOpen, onClose }) => {

  const { t } = useTranslation()

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
        <div className="icon" onClick={onClose}> <FontAwesomeIcon icon={faTimes}/> </div>
      </div>
      { allData.map((strings, id) => (
        <>
          { allData[id]._id == ids && 
          <div className="modal-body" key={id}>
            <>
              <div className="modal-title">
                <h3>{t('informations.firstname')}</h3>
                <h3>{t('informations.lastname')}</h3>
                <h3>{t('informations.email')}</h3>
                <h3>{t('informations.phonenumber')}</h3>
                <h3>{t('informations.height')}</h3>
                <h3>{t('informations.weight')}</h3>
                <h3>{t('informations.seize')}</h3>
              </div>
              <div className="modal-text">
                <p>{ allData[id].firstname }</p>
                <p> { allData[id].lastname } </p>
                <p> { allData[id].email } </p>
                <p> { allData[id].phonenumber } </p>
                <p> { allData[id].height } </p>
                <p> { allData[id].weight } </p>
                <p> { allData[id].seize } </p>
               
              </div>
            </>
          </div>
          }
        </>
      )) }
    </div>
  );
};

export default Modal