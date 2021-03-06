import { useState } from "react";
import {AccessContextConsumer, IAccessContextProps} from "../../Context/accesContext"
import './delivery.css'

import deviceImage from "../../icons/device.svg";
require('dotenv').config();

function Device(props:any) {
    const host = process.env.REACT_APP_HOST;  

    const [deviceData, setDeviceData] = useState([[""]]);

    const getDeviceData = async(e:any) => {
      const requestOptionsGet = {
        method: "GET"
      };
      const response:any = await fetch(`http://${host}:3003/getDevice`,requestOptionsGet);
      let json = await response.json();
      var outputArray = [];  
      for (let element in json) {  
          outputArray.push( 
            [json[element]._id,json[element].name,json[element].operatingsystem, [json[element].owner]]
          );  
      }
      setDeviceData(outputArray);
    }

    var Component = (
            <div className="deliveryHead"> {deviceData.map(device => (
              <div className="delivery" key={device[0]}>
                <img src={deviceImage} className="image"/>
                <ul>id: {device[0]}</ul>
                <ul>name: {device[1]}</ul>
                <ul>operatingsystem: {device[2]}</ul>
                <ul>owner: {device[3]}</ul>
              </div>
                    ))}
            </div> 
        )

    return (
      <AccessContextConsumer>
        {(context: IAccessContextProps) => ( 
          <div>
            <h1 onClick={() => props.action("choice")}>Device</h1>
            <p>{Component}</p>
            <button disabled={!context.accessState.access.includes("device")} type="submit" onClick={getDeviceData}>
                getData
            </button>
            <button onClick={() => {console.log("consumer: ", context.accessState.access.toString())}}> contextData </button>
          </div>
        )}
      </AccessContextConsumer>
    )
}

export default Device