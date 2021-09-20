import React, { useState } from "react";
import "./consumer.css";
import Modal from '../Modal';
import Form from './Form'
import plusImage from "../../icons/plus.svg";
// hooks
import {getPermissions} from "../../hooks/getPermissions"
import {AccessContextConsumer} from "../../context/accesContext"
require('dotenv').config();  


function NewConsumer() {
    return(
        <div className="newConsumer">
            <h1>new Consumer</h1>
            <Modal type={"new"} data={""}/>
        </div>
    )
 }
export default () => ( <NewConsumer /> );