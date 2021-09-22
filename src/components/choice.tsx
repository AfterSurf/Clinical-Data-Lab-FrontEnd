import React, { useState } from "react";

import Device from "./Delivery/Device";
import Observation from "./Delivery/Observation";
import Patient from "./Delivery/Patient";
import Practitioner from "./Delivery/Practitioner";

import {AccessContextConsumer, IAccessContextProps} from "../Context/accesContext"

import "./choice.css"

function Choice() {
    const [state, setState] = useState("choice");

    const trigger = (element:string) => {
        console.log("triggered!");
        setState(element);
    }

    const choice = (<div className="container choice">
            <p className="device rotate" onClick={()=>{trigger("device")}}>Device</p>
            <p className="observation rotate" onClick={()=>{trigger("observation")}}>Observation</p>
            <p className="patient rotate" onClick={()=>{trigger("patient")}}>Patient</p>
            <p className="practitioner rotate" onClick={()=>{trigger("practitioner")}}>Practitioner</p>
        </div> )

    return (
        <AccessContextConsumer>
        {(context: IAccessContextProps) => ( 
        <div className="">
            { state === 'choice' && choice}
            { state === 'device' && <Device action={trigger}/>}
            { state === 'observation' && <Observation action={trigger}/>}
            { state === 'patient' && <Patient action={trigger}/>}
            { state === 'practitioner' && <Practitioner action={trigger}/>}
        </div>
        )}
        </AccessContextConsumer>
    )
}

export default Choice;
