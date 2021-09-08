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
      console.log(JSON.stringify(json));
      setPractitionerData(json);
    }
    
    return (
    <div>
        <h1>Practitioner</h1>
      <p>{practitionerData}</p>
        <button type="submit" onClick={getObservationData}>
            getData
        </button>
    </div>
    )

}

export default Practitioner