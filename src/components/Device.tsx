import React, { useState } from "react";
require('dotenv').config();



function Device() {
    const host = process.env.REACT_APP_HOST;  

    const [deviceData, setDeviceData] = useState(["test"]);

    const getDeviceData = async(e:any) => {
        const requestOptionsGet = {
          method: "GET"
        };
      // GET request using fetch with async/await
      const response:any = await fetch(`http://${host}:3003/getDevice`,requestOptionsGet);
      let json = await response.json();
      const dataArray = formArray(json)
      // setDeviceData(JSON.stringify(json));
      setDeviceData(dataArray);
    }

    const formArray = (element: any) => {
      return [element];
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