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
              <div className="contactCard col-md-6" key={contact.contact[index].id}>
                <h3>{contact.contact[index].title}</h3>
                <p> {contact.contact[index].navn}</p>
                <p> {contact.contact[index].adresse}</p>
                <p> {contact.contact[index].mail}</p>
                <p> {contact.contact[index].telefon}</p>
                <p> {contact.contact[index].cvr}</p>
              </div> 
            ))}
            {contact.contact.map((item, index) => (
                <div className="contactImage col-md-6" key={contact.contact[index].id}>
                  <img src={contact.contact[index].img} className="contact_img"  alt="" />
                </div> 
            ))}
        </section>
      </div>
    </>
  );
};

export default Contact;
