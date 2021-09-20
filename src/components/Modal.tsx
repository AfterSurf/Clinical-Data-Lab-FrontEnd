// https://dev.to/bhuma08/react-using-modal-in-functional-components-3po2

import React, {useState} from 'react';
import Modal from 'react-modal';
import getPermissions from "../hooks/getPermissions"
import './modal.css'

// new consumer
import plusImage from "../icons/plus.svg";
import Form from '../components/Consumer/Form';

// edit consumer
import editImage from "../icons/edit.svg";

function ModalInFunctionalComponent(props: any){

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor       : '#F0AA89'      
        }
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    if(props.type === "new") {
        return(
            <>
                <img className="imagePlus" onClick={setModalIsOpenToTrue} src={plusImage}/>
                <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)} ariaHideApp={false}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <Form text="create a new consumer"/>
                </Modal>
            </>
        )
    } 


    if(props.type === "edit") {
        return(
            <>
                <img className="imageEdit" onClick={setModalIsOpenToTrue} src={editImage}/>
                <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)} ariaHideApp={false}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <Form text="edit your consumer"/>
                    
                </Modal>
            </>
        )
    } 
    else {
        return <></>
    }


}

export default ModalInFunctionalComponent