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
        console.log(JSON.stringify(json));
        setPatientData(json);
    }

    return (
        <div>
            <h1>Patient</h1>
            <p>{patientData}</p>
            <button type="submit" onClick={getPatientData}>
            getData
          </button>
        </div>
    )

}


export default Patient;