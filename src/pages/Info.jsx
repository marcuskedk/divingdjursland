import React from "react";
import info from "../helpers/info.json";
import { Routes, Route, NavLink } from "react-router-dom";

const Info = () => {
  return (
    <div className="container">
      <section className="info row">
        <div className="col-md-4">
          <div className="sticky">
            <div className="info_menu">
              {info.praktisk.map((item, index) => (
                <a className="redirect_links" href= {"#" + info.praktisk[index].link }>{ info.praktisk[index].title }</a>  
              ))}
            </div>
          </div>
         
        </div>

        <div className="col-md-8">
          {info.praktisk.map((item, index) => (
            <div className="infoCard" id={info.praktisk[index].link}>
              <h3>{info.praktisk[index].title}</h3>
              <p> {info.praktisk[index].text1}</p>
              <p> {info.praktisk[index].text2}</p>
              <p> {info.praktisk[index].text3}</p>
              <p> {info.praktisk[index].text4}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Info;
