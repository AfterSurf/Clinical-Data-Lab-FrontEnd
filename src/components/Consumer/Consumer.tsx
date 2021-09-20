// https://css-tricks.com/considerations-styling-modal/


import React, { useState } from "react";
import "./consumer.css";
import Modal from '../Modal';

// hooks
import { getPermissions} from "../../hooks/getPermissions"
import getPermissionsDisplay from "../../hooks/getPermissions"
import {AccessContextConsumer} from "../../context/accesContext"
import NewConsumer from './newConsumer'
require('dotenv').config();  


function Consumer() {
    const host = process.env.REACT_APP_HOST

    const [consumerData, setConsumerData] = useState([[""]]);
    const [isActive, setActive] = useState(false);

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
      <div className="outerContainer">
        <AccessContextConsumer>
        {(context: any) => ( 
          <div className="consumerHead" > {consumerData.map(station => (

            <div className={"consumer"} key={station[0]} onClick={() =>{
              context.toggleAccess({access: getPermissions(station[3].toString())})}
            }>
              <Modal type={"edit"} data={""}/>
              <ul>id: {station[0]}</ul>
              <ul>name: {station[1]}</ul>
              <ul>apiKey: {station[2]}</ul>
              <ul>permissions: {station[3] ? getPermissions(station[3].toString()).join(" "): ""}</ul>
            </div>

          ))} 
            <NewConsumer/>
          </div>

        )}
        </AccessContextConsumer>
      </div>
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

export default () => ( <Consumer /> );

