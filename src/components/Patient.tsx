import React, { useState } from "react";
require('dotenv').config();

function Patient() {
  const host = process.env.REACT_APP_HOST;

    const [patientData, setPatientData] = useState([[""]]);

    const getPatientData = async(e:any) => {
        const requestOptionsGet = {
          method: "GET"
        };
        // GET request using fetch with async/await
        const response:any = await fetch(`http://${host}:3003/getPatient`,requestOptionsGet);
        const json = await response.json();

        var outputArray = [];  
        for (let element in json) {  
            outputArray.push( 
              [json[element]._id,json[element].name,json[element].age, json[element].sex]
            );  
        }

        setPatientData(outputArray);
    }

    var Component = (<div className="consumerHead"> {patientData.map(patient => (
      <div className="consumer" key={patient[0]}>
        <ul>id: {patient[0]}</ul>
        <ul>name: {patient[1]}</ul>
        <ul>age: {patient[2]}</ul>
        <ul>sex: {patient[3]}</ul>
      </div>
    ))} </div>)

    return (
        <div>
            <h1>Patient</h1>
            <p>{Component}</p>
            <button type="submit" onClick={getPatientData}>
            getData
          </button>
        </div>
    )

}


export default Patient;