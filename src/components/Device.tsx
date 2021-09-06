import React, { useState } from "react";
require('dotenv').config();

function Device() {
    const host = process.env.REACT_APP_HOST;  

    const [deviceData, setDeviceData] = useState("null");

    const getDeviceData = async(e:any) => {
        const requestOptionsGet = {
          method: "GET"
        };
      // GET request using fetch with async/await
      const response:any = await fetch(`http://${host}:3003/getDevice`,requestOptionsGet);
      const json = await response.json();
      console.log(JSON.stringify(json));
      setDeviceData(JSON.stringify(json));
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