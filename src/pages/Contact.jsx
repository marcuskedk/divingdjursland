import React from "react";
import contact from "../helpers/contact.json";
import Slider from "../components/Slider.jsx";

const Contact = () => {
  return (
    <>
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
        <section className="contact row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-12">
                <h3>Sociale medieer</h3>
              </div>
              <div className="col-12">
                <a href="">Facebook</a>
              </div>
              <div className="col-12">
                <a href="">Facebook</a>
              </div>
              <div className="col-12">
                <a href="">Facebook</a>
              </div>
              <div className="col-12">
                <a href="">Facebook</a>
              </div>
              <div className="col-12">
                <a href="">Facebook</a>
              </div>
              <div className="col-12">
                <a href="">Facebook</a>
              </div>
              <div className="col-12">
                <a href="">Facebook</a>
              </div>
            </div>
          </div>
          <div className="contactCard col-lg-8">
            <form action="" className="row">
              <div className="col-12">
                <h3>Kontakt formular</h3>
              </div>
              <div className="col-lg-6 input-field">
                <label htmlFor="">Fornavn</label>
                <input type="text" className="form-control" placeholder="Fornavn..." />
              </div>
              <div className="col-lg-6 input-field">
                <label htmlFor="">Efternavn</label>
                <input type="text" className="form-control" placeholder="Efternavn..." />
              </div>
              <div className="col-12 input-field">
                <label htmlFor="">Email</label>
                <input type="email" className="form-control" placeholder="Email..." />
              </div>
              <div className="col-12 input-field">
                <label htmlFor="">Emne</label>
                <input type="text" className="form-control" placeholder="Emne..." />
              </div>
              <div className="col-12 input-field">
                <label htmlFor="">Besked</label>
                <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Besked..."></textarea>
              </div>
              <div className="col-12">
                <button type="submit" class="button button-success">Send</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
