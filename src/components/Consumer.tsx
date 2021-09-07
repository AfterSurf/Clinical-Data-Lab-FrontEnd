// https://css-tricks.com/considerations-styling-modal/


import React, { useState } from "react";
import "./consumer.css";
import Modal from './Modal';
require('dotenv').config();  


function Consumer() {
    const host = process.env.REACT_APP_HOST

    const [consumerData, setConsumerData] = useState([[""]]);

    const getConsumerData = async(e:any) => {
        const requestOptionsGet = {
          method: "GET"
        };
      // GET request using fetch with async/await
      const response:any = await fetch(`http://${host}:3003/getConsumer`,requestOptionsGet);
      const json = await response.json();

      var outputArray = [];  
      for (let element in json) {  
          console.log("element: ",json[element])
          outputArray.push( 
            [json[element]._id,json[element].name,json[element].apiKey, [json[element].permissions]]
          );  
      }
      console.log("output:",outputArray)
      setConsumerData(outputArray);
      // setConsumerData(JSON.stringify(json));
    }
    console.log("consumerdata: ", consumerData)

    var display = () => {
      console.log("click")
      return alert("thanks for clickin");
    }


    {consumerData.map((element) => {<li>{element[0]}</li>})}
    
    var Test = (<div className="consumerHead"> {consumerData.map(station => (
      <div className="consumer" key={station[0]}>
        <ul>id: {station[0]}</ul>
        <ul>name: {station[1]}</ul>
        <ul>apiKey: {station[2]}</ul>
        <ul>permissions: {station[3]}</ul>

        <Modal data={station}/>
        {/* <button className="consumerButton"  onClick={() => display() }>clickME</button> */}
      </div>
    ))} </div>)


    return (
    <div>
        <h1>Consumer</h1>
          {Test}
        <button type="submit" onClick={getConsumerData}>
            getData
        </button>
    </div>
    )

}

export default Consumer