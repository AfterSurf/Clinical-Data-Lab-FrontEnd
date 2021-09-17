// https://flaviocopes.com/react-show-different-component-on-click/

import React, { useState } from "react";

import Device from "./Delivery/Device";
import Observation from "./Delivery/Observation";
import Patient from "./Delivery/Patient";
import Practitioner from "./Delivery/Practitioner";


import LogInForm from "./Form";

import "./choice.css"

function Choice() {
    const [state, setState] = useState("choice");

    const trigger = (element:string) => {
        console.log("triggered!");
        setState(element);
    }

    const choice =             (<div className="choice">
    <p className="device rotate" onClick={()=>{trigger("device")}}>Device</p>
    <p className="observation rotate" onClick={()=>{trigger("observation")}}>Observation</p>
    <p className="patient rotate" onClick={()=>{trigger("patient")}}>Patient</p>
    <p className="practitioner rotate" onClick={()=>{trigger("practitioner")}}>Practitioner</p>
</div> )

    const device = (<h1 onClick={()=>{trigger("choice")}}>device</h1>)
    const observation = (<h1 onClick={()=>{trigger("choice")}}>observation</h1>)
    const patient = (<h1 onClick={()=>{trigger("choice")}}>patient</h1>)
    const practitioner = (<h1 onClick={()=>{trigger("choice")}}>practitioner</h1>)

    return (
        <div className="container">
            { state === 'choice' && choice}
            { state === 'device' && <Device action={trigger}/>}
            { state === 'observation' && <Observation/>}
            { state === 'patient' && <Patient/>}
            { state === 'practitioner' && <Practitioner/>}
        </div>
    )
}

export default Choice;