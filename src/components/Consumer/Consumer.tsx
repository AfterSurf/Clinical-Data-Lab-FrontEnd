// https://css-tricks.com/considerations-styling-modal/


import React, { useState, useContext, useEffect } from "react";
import "./consumer.css";
import Modal from '../Modal';
// hooks
import { getPermissions} from "../../hooks/getPermissions"
import {AccessContextConsumer, IAccessState} from "../../Context/accesContext"
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
          outputArray.push( 
            [json[element]._id,json[element].name,json[element].apiKey, [json[element].permissions]]
          );  
      }
      setConsumerData(outputArray);
    }

    
    var Component = (
      <AccessContextConsumer>
      {(context: any) => ( 
    <div className="consumerHead" > {consumerData.map(station => (
      
      <div className="consumer" key={station[0]}>
        <ul>id: {station[0]}</ul>
        <ul>name: {station[1]}</ul>
        <ul>apiKey: {station[2]}</ul>
        <ul>permissions: {station[3]}</ul>
        {station[3] ? 
          <Modal data={station[3].toString()}/>
        : ""}
          <button onClick={() => context.toggleAccess({access: getPermissions(station[3].toString())})}>
                useContext
          </button>
      </div>
    ))} </div>
    )}
    </AccessContextConsumer>
    )


    return (
        <div>
            <h1>Consumer</h1>
              {Component}
            <button type="submit" onClick={getConsumerData}>
                getData
            </button>
        </div>
    )

}

export default () => (
    <Consumer />
);

