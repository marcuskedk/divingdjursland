import React from 'react'
import info from "../helpers/info.json";

const Info = () => {
    return (
        
        <div className="container">

            <section className="info row">
            {info.praktisk.map((item, index)=>
           
           
           <div className=" col-md-6" key={info.praktisk[index].id}> 
            <div className="infoCard">
                
            <h3>{info.praktisk[index].title}</h3>
            <p> {info.praktisk[index].text1}</p>
            <p> {info.praktisk[index].text2}</p>
            <p> {info.praktisk[index].text3}</p>
            <p> {info.praktisk[index].text4}</p>
            </div>


            </div>
            
            
            )}
            </section>
        
        </div>
    )
}

export default Info
