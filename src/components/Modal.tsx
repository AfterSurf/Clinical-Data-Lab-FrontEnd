// https://stackoverflow.com/questions/40209352/how-to-specify-optional-default-props-with-typescript-for-stateless-functiona

import React, {useState} from 'react';
import Modal from 'react-modal';
import './modal.css'

// new consumer
import plusImage from "../icons/plus.svg";
import Form from '../components/Consumer/Form';

// edit/delete consumer
import editImage from "../icons/edit.svg";
import trashImage from '../icons/trash.svg';

function ModalInFunctionalComponent(props: any){
    const host = process.env.REACT_APP_HOST 
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

    const deleteConsumer = async(id:any) => {
        const requestOptionsPost = {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({id:id,})
        };
      const response:any = await fetch(`http://${host}:3003/deleteConsumer`,requestOptionsPost);
      const json = await response.json();
      console.log(json)
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
                <div className="images">
                    <img className="imageEdit" onClick={setModalIsOpenToTrue} src={editImage}/>
                    <img className="imageTrash" onClick={() => deleteConsumer(props.data)} src={trashImage}/>
                </div>
                <Modal isOpen={modalIsOpen} style={customStyles} id={props.data} onRequestClose={()=> setModalIsOpen(false)} ariaHideApp={false}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <Form data={props.data} text="edit your consumer"/>
                </Modal>
            </>
        )
    } 
    else {
        return <></>
    }

}

export default ModalInFunctionalComponent