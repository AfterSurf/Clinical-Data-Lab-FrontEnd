// https://dev.to/bhuma08/react-using-modal-in-functional-components-3po2

import React, {useState} from 'react';
import Modal from 'react-modal';
import AnimeList from './Anime';

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

    return(
        <>
            <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>

            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
            <button onClick={setModalIsOpenToFalse}>x</button>
            {/* <AnimeList/> */}
                {props.data}
            </Modal>
        </>
    )
}

export default ModalInFunctionalComponent