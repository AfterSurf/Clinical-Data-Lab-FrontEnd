import React, { useState } from "react";
import {AccessContextConsumer, IAccessContextProps} from "../../context/accesContext"
import './delivery.css'
require('dotenv').config();

function Patient(props:any) {
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

    var Component = (<div className="deliveryHead"> {patientData.map(patient => (
      <div className="delivery" key={patient[0]}>
        <ul>id: {patient[0]}</ul>
        <ul>name: {patient[1]}</ul>
        <ul>age: {patient[2]}</ul>
        <ul>sex: {patient[3]}</ul>
      </div>
    ))} </div>)

    return (
      <AccessContextConsumer>
        {(context: IAccessContextProps) => ( 
          <div>
            <h1 onClick={() => props.action("choice")}>Patient</h1>
            <p>{Component}</p>
            <button disabled={!context.accessState.access.includes("patient")} type="submit" onClick={getPatientData}>
                getData
            </button>
            <button onClick={() => {console.log("consumer: ", context.accessState.access.toString())}}> contextData </button>
          </div>
        )}
      </AccessContextConsumer>
    )

}


export default Patient;