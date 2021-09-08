import React, { useState } from "react";
require('dotenv').config()  


function Practitioner() {
    const host = process.env.REACT_APP_HOST

    const [practitionerData, setPractitionerData] = useState([[""]]);

    const getObservationData = async(e:any) => {
        const requestOptionsGet = {
          method: "GET"
        };
      // GET request using fetch with async/await
      const response:any = await fetch(`http://${host}:3003/getPractitioner`,requestOptionsGet);
      const json = await response.json();

      var outputArray = [];  
      for (let element in json) {  
          console.log("element: ",json[element])
          outputArray.push( 
            [json[element]._id,json[element].name,json[element].profession, json[element].description]
          );  
      }

      setPractitionerData(json);
    }

    var Component = (<div className="consumerHead"> {practitionerData.map(practitioner => (
      <div className="consumer" key={practitioner[0]}>
        <ul>id: {practitioner[0]}</ul>
        <ul>name: {practitioner[1]}</ul>
        <ul>age: {practitioner[2]}</ul>
        <ul>sex: {practitioner[3]}</ul>
      </div>
    ))} </div>)
    
    return (
    <div>
        <h1>Practitioner</h1>
      <p>{Component}</p>
        <button type="submit" onClick={getObservationData}>
            getData
        </button>
    </div>
    )

}

export default Practitioner