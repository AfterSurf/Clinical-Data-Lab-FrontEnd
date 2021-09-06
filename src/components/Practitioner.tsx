import React, { useState } from "react";
require('dotenv').config()  


function Practitioner() {
    const host = process.env.REACT_APP_HOST
    console.log("host ", host)
    console.log("host ", process.env.HOST)

    const [practitionerData, setPractitionerData] = useState("null");

    const getObservationDataData = async(e:any) => {
        const requestOptionsGet = {
          method: "GET"
        };
      // GET request using fetch with async/await
      const response:any = await fetch(`http://${host}:3003/getPractitioner`,requestOptionsGet);
      const json = await response.json();
      console.log(JSON.stringify(json));
      setPractitionerData(JSON.stringify(json));
    }
    
    return (
    <div>
        <h1>Practitioner</h1>
      <p>{practitionerData}</p>
        <button type="submit" onClick={getObservationDataData}>
            getData
        </button>
    </div>
    )

}

export default Practitioner