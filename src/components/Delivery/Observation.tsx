import React, { useState } from "react";
import {AccessContextConsumer, IAccessContextProps} from "../../context/accesContext"
import observationImage from "../../icons/observation.svg";
import './delivery.css'
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
          outputArray.push( 
            [json[element]._id,json[element].patient,json[element].practitioner, json[element].description]
          );  
      }

      setObservationData(outputArray);
    }

    var Component = (<div className="deliveryHead"> {observationData.map(observation => (
      <div className="delivery" key={observation[0]}>
        <img src={observationImage} className="image"/>
        <ul>id: {observation[0]}</ul>
        <ul>patient: {observation[1]}</ul>
        <ul>practitioner: {observation[2]}</ul>
        <ul>description: {observation[3]}</ul>
      </div>))} 
      </div>)

    return (
      <AccessContextConsumer>
        {(context: IAccessContextProps) => ( 
          <div>
            <h1 onClick={() => props.action("choice")}>Observation</h1>
            <div>{Component}</div>
            <button disabled={!context.accessState.access.includes("observation")} type="submit" onClick={getObservationDataData}>
                getData
            </button>
            <button onClick={() => {console.log("consumer: ", context.accessState.access.toString())}}> contextData </button>
          </div>
        )}
      </AccessContextConsumer>
    )
}
