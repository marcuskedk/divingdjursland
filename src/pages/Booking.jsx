import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Booking = () => {
  return (
    <div className="container">
      <a href="/"></a>
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
      </div>
    </div>
  );
};

export default Booking;
