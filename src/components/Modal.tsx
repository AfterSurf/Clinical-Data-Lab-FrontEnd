// https://dev.to/bhuma08/react-using-modal-in-functional-components-3po2

import React, {useState} from 'react';
import Modal from 'react-modal';
import getPermissionsDisplay from "../hooks/getPermissions"

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
    const permissions = getPermissionsDisplay(props.data);
    console.log("props-data: ",props.data)
    console.log("permissions[0]", permissions[1])

    const show = permissions.map((element:string) => {<li>{element}</li>})
    return(
        <>
            <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>

            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)} ariaHideApp={false}>
            <button onClick={setModalIsOpenToFalse}>x</button>
            {/* <AnimeList/> */}
               Permissions:  {permissions}
                
            </Modal>
        </>
    )
}

export default ModalInFunctionalComponent