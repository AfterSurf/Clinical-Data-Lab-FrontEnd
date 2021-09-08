import React, { useState } from "react";
require('dotenv').config();

function Observation() {
  const host = process.env.REACT_APP_HOST;

    const [observationData, setObservationData] = useState([[""]]);

    const getObservationDataData = async(e:any) => {
        const requestOptionsGet = {
          method: "GET"
        };
      // GET request using fetch with async/await
      const response:any = await fetch(`http://${host}:3003/getPatient`,requestOptionsGet);
      const json = await response.json();

      var outputArray = [];  
      for (let element in json) {  
          console.log("element: ",json[element])
          outputArray.push( 
            [json[element]._id,json[element].name,json[element].operatingsystem, [json[element].owner]]
          );  
      }

      setObservationData(json);
    }
    
    return (
    <div>
        <h1>Observation</h1>
        <p>{observationData}</p>
        <button type="submit" onClick={getObservationDataData}>
            getData
        </button>
    </div>
    )

}

export default Observation