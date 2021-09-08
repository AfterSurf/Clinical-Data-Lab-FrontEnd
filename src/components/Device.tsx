import React, { useState } from "react";
require('dotenv').config();



function Device() {
    const host = process.env.REACT_APP_HOST;  

    const [deviceData, setDeviceData] = useState([[""]]);

    const getDeviceData = async(e:any) => {
        const requestOptionsGet = {
          method: "GET"
        };
      // GET request using fetch with async/await
      const response:any = await fetch(`http://${host}:3003/getDevice`,requestOptionsGet);
      let json = await response.json();
      var outputArray = [];  
      for (let element in json) {  
          console.log("element: ",json[element])
          outputArray.push( 
            [json[element]._id,json[element].name,json[element].operatingsystem, [json[element].owner]]
          );  
      }
      setDeviceData(outputArray);
    }


    return (
    <div>
        <h1>Device</h1>
      <p>{deviceData}</p>
        <button type="submit" onClick={getDeviceData}>
            getData
        </button>
    </div>
    )

}



export default Device