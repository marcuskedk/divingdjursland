import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { getBookingCategory } from "../helpers/Request";

const Booking = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    // setTimeout(() => {
      getBookingCategory()
      .then((res) => {
        if (res) {
          console.log(res);
          setData(res);
          setError(false);
        } else {
          setData();
          setError(true);
        }
      })
      .finally(setLoading(false));
    // }, 3000);
  }, []);

  return (
    <section className="booking-page">
      <div className="container">

        <div className="row g-4">
          { loading && 
            <div className="col-12">
              <span>Der opstod en fejl</span>
            </div>
          }
          {error &&
            <div className="col-12">
              <span>Der opstod en fejl</span>
            </div>
          }
          {data && data.map((index, item) => (
            <div className="col-lg-4" key={item}>
              <div className="card">
                <div className="card-header">{data[item].title}</div>
              </div>
            </div>
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
