import React, { useState, useContext } from "react";
require('dotenv').config();

export default function Observation(props:any) {
  const host = process.env.REACT_APP_HOST;

    const [observationData, setObservationData] = useState([[""]]);

    const getObservationDataData = async(e:any) => {
        const requestOptionsGet = {
          method: "GET"
        };
      // GET request using fetch with async/await
      const response:any = await fetch(`http://${host}:3003/getObservation`,requestOptionsGet);
      const json = await response.json();

      var outputArray = [];  
      for (let element in json) {  
          console.log("element: ",json[element])
          outputArray.push( 
            [json[element]._id,json[element].patient,json[element].practitioner, json[element].description]
          );  
      }

      setObservationData(outputArray);
    }

    var Component = (<div className="consumerHead"> {observationData.map(observation => (
      <div className="consumer" key={observation[0]}>
        <ul>id: {observation[0]}</ul>
        <ul>patient: {observation[1]}</ul>
        <ul>practitioner: {observation[2]}</ul>
        <ul>description: {observation[3]}</ul>
      </div>
    ))} </div>)

    console.log("ObservationProps: ", JSON.stringify(props))
    return (

    <div>
        <h1>Observation</h1>
        <p>{Component}</p>
        
        <button type="submit" onClick={getObservationDataData}>
            getData
        </button>
    </div>

    )
}
