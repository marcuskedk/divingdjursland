import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory ,useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { getBookingCategory, getBooking } from "../helpers/Request";
import axios from "axios";

const api = {
  baseUrl: 'http://localhost:3000/'
}

const Booking = () => {
  const location = useLocation()
  // console.log(location)
  const itemID = location.search.split("=")[1];

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getBookingCategory().then((res) => {
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
    }, 500);
  }, []);

  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [phonenumber, setPhonenumber] = useState("");
  // const [height, setHeight] = useState("");
  // const [weight, setWeight] = useState("");
  // const [seize, setSeize] = useState("");
  // const [cardnumber, setCardnumber] = useState("");
  // const [carddate, setCarddate] = useState("");
  // const [cardcvc, setCardcvc] = useState("");

  // const [message, setMessage] = useState("");

  // let datasql = await fetch("http://localhost:3000/booking", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     firstname: firstname,
  //     lastname: lastname,
  //     email: email,
  //     phonenumber: phonenumber,
  //     height: height,
  //     weight: weight,
  //     seize: seize,
  //     cardnumber: cardnumber,
  //     carddate: carddate,
  //     cardcvc: cardcvc,
  //   }),
  // });

  // let resJson = datasql.json();

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let response = axios.get( 'http://localhost:3000/booking/', {
  //       method: "POST",
  //       body: JSON.stringify({
  //         category_id: itemID,
  //         firstname: firstname,
  //         firstname: firstname,
  //         lastname: lastname,
  //         email: email,
  //         phonenumber: phonenumber,
  //         height: height,
  //         weight: weight,
  //         seize: seize,
  //         // cardnumber: cardnumber,
  //         // carddate: carddate,
  //         // cardcvc: cardcvc,
  //       }),
  //     });
  //     // let resJson = response.json();
  //     if (response.status === 200) {
  //       setFirstname("");
  //       setLastname("");
  //       setEmail("");
  //       setPhonenumber("");
  //       setHeight("");
  //       setWeight("");
  //       setSeize("");
  //       setMessage("User created successfully");
  //     } else {
  //       setMessage("Some error occured"); 
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const dateNow = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  const convertDate = { year: 'numeric', month: 'numeric', day: 'numeric' };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [seize, setSeize] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const url = 'http://localhost:3000/booking'
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { 
          category_id: itemID,
          firstname: firstname,
          lastname: lastname,
          email: email,
          phonenumber: phonenumber,
          height: height,
          weight: weight,
          seize: seize,
          "status": "0",
          "created_at": dateNow.toLocaleDateString('da-DK', convertDate)
        }
      )
    };
    fetch(url, requestOptions)
      .then(response => setMessage("Tak for din tilmeldelse, vi kigger på den hurtigst muligt.") )
      .catch(error => setMessage("Der opstod en fejl!"))
  };

  // console.log(watch("hej"));

  // const [values, setValues] = useState({
  //   category_id: '', firstname: '', lastname: '', email: '', phonenumber: '', height: '', weight: '', seize: ''
  // });
  
  

    // category_id: '', firstname: '', lastname: '', email: '', phonenumber: '', height: '', weight: '', seize: ''

  return (
    <section className="booking-page">
      <div className="container">

        <div className="row g-4 justify-content-center">
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
                              <a href={"booking?cart=" + data[item]._id } className="button button-success d-block text-center fw-bold">TILMELD</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              }
              { location.search == '?cart=' + data[item]._id && 
              <>
              <div className="col-12">
                <form className="row" onSubmit={handleSubmit}>
                  <div className="col-12" key={data[item]._id}>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Forside</a></li>
                        <li className="breadcrumb-item"><a href="/booking">Dykkesteder</a></li>
                        <li className="breadcrumb-item"><a href={"/booking?id=" + data[item]._id}>{ data[item].title }</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Betaling</li>
                      </ol>
                    </nav>
                  </div>
                  <div className="col-lg-8" key={item}>
                    <div className="card">
                      <div className="card-body row">
                        <div className="col-12 my-1">
                          <h3 className="m-0 fw-bold">Betaling for { data[item].title }</h3>
                        </div>
                        {message ? 
                        <>
                          <div className="col-12 my-1">
                            <div className="alert alert-info">{message}</div>
                          </div>
                        </> : null}
                        <div className="col-lg-6 my-1">
                          <label htmlFor="" className="d-block my-1">Fornavn:</label>
                          <input value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" className="form-control" placeholder="Fornavn..." required />
                        </div>
                        <div className="col-lg-6 my-1">
                          <label htmlFor="" className="d-block my-1">Efternavn:</label>
                          <input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" className="form-control" placeholder="Efternavn..." required />
                        </div>
                        <div className="col-lg-8 my-1">
                          <label htmlFor="" className="d-block my-1">Email:</label>
                          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email..." required />
                        </div>
                        <div className="col-lg-4 my-1">
                          <label htmlFor="" className="d-block my-1">Tlf:</label>
                          <input value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} type="number" className="form-control" placeholder="Tlf..." required />
                        </div>
                        <div className="col-lg-4 my-1">
                          <label htmlFor="" className="d-block my-1">Højde:</label>
                          <input value={height} onChange={(e) => setHeight(e.target.value)} type="number" className="form-control" placeholder="Højde..." required />
                        </div>
                        <div className="col-lg-4 my-1">
                          <label htmlFor="" className="d-block my-1">Vægt:</label>
                          <input value={weight} onChange={(e) => setWeight(e.target.value)} type="number" className="form-control" placeholder="Vægt..." required />
                        </div>
                        <div className="col-lg-4 my-1">
                          <label htmlFor="" className="d-block my-1">Skostørrelse:</label>
                          <input value={seize} onChange={(e) => setSeize(e.target.value)} type="number" className="form-control" placeholder="Skostørrelse..." required />
                        </div>
                        <div className="col-12">
                          <hr className="my-3" />
                        </div>
                        <div className="col-12 my-1">
                          <label htmlFor="" className="d-block my-1">Kortnummer:</label>
                          <input type="number" className="form-control" placeholder="Kortnummer..." />
                        </div>
                        <div className="col-lg-6 my-1">
                          <label htmlFor="" className="d-block my-1">Udløber (mm/åå):</label>
                          <input type="text" className="form-control" placeholder="Udløber (mm/åå)..." />
                        </div>
                        <div className="col-lg-6 my-1">
                          <label htmlFor="" className="d-block my-1">CVC:</label>
                          <input type="pasword" className="form-control" placeholder="CVC..." />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body">
                        <p className="text-center fs-5 text-success fw-bold">{ data[item].price }</p>
                        <button type="submit" className="button button-success d-block text-center fw-bold w-100">BETAL</button>
                      </div>
                    </div>
                  </div>
                </form>
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
      </div>
    </section>
  );
};

export default Booking;
