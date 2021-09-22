import { useState } from "react";
import {AccessContextConsumer, IAccessContextProps} from "../../context/accesContext";
import practitionerImage from "../../icons/practitioner.svg";
import './delivery.css'
require('dotenv').config()  


function Practitioner(props:any) {
    const host = process.env.REACT_APP_HOST

    const [practitionerData, setPractitionerData] = useState([[""]]);

    const getPractitionerData = async(e:any) => {
        const requestOptionsGet = {
          method: "GET"
        };
      const response:any = await fetch(`http://${host}:3003/getPractitioner`,requestOptionsGet);
      const json = await response.json();

      var outputArray = [];  
      for (let element in json) {  
          outputArray.push( 
            [json[element]._id,json[element].name,json[element].profession, json[element].description]
          );  
      }

      setPractitionerData(outputArray);
    }

    var Component = (
    <div className="deliveryHead"> {practitionerData.map(practitioner => (
      <div className="delivery" key={practitioner[1]}>
        <img src={practitionerImage} className="image"/>
        <ul>id: {practitioner[0]}</ul>
        <ul>name: {practitioner[1]}</ul>
        <ul>profession: {practitioner[2]}</ul>
        <ul>area of expertise: {practitioner[3]}</ul>
      </div>
      ))} 
    </div> )
    
    return (
      <AccessContextConsumer>
        {(context: IAccessContextProps) => ( 
          <div>
            <h1 onClick={() => props.action("choice")}>Practitioner</h1>
            <p>{Component}</p>
            <button disabled={!context.accessState.access.includes("practitioner")} type="submit" onClick={getPractitionerData}>
                getData
            </button>
            <button onClick={() => {console.log("consumer: ", context.accessState.access.toString())}}> contextData </button>
          </div>
        )}
      </AccessContextConsumer>
    )

}

export default Practitioner