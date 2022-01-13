import React from "react";
import contact from "../helpers/contact.json";
import Slider from "../components/Slider.jsx";

const Contact = () => {
  return (
    <>
      <Slider />
      <div className="container">
        <section className="contact row">
          {contact.contact.map((item, index) => (
            <div className=" col-md-6" key={contact.contact[index].id}>
              <div className="contactCard">
                <h3>{contact.contact[index].title}</h3>
                <p> {contact.contact[index].navn}</p>
                <p> {contact.contact[index].adresse}</p>
                <p> {contact.contact[index].mail}</p>
                <p> {contact.contact[index].telefon}</p>
                <p> {contact.contact[index].cvr}</p>
                <img
                  src={contact.contact[index].img}
                  className="contact_img"
                  alt=""
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Contact;
