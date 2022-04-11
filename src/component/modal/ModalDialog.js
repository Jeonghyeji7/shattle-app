import React from 'react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './ModalDialog.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from 'react';

const style = {
    minWidth: "250px",
    maxWidth: "450px",
    minHeight: "100px",
    width: "auto",
    height: "auto",
    zIndex: 1502,
    margin: "0px",
    left: "0px",
    top: "0px",
    transform: "translate(643px, 73px)",
    transition: "none 0s ease 0s",
    opacity: 1,
    border: "1px solid #ddd",
    background: "white",
    webkitboxshadow: "0 6px 12px rgb(0 0 0 / 18%)",
    boxShadow: "0 6px 12px rgb(0 0 0 / 18%)",
    borderRadius: "6px",
    position: "absolute",
    pointerEvents: "auto",
    outline: 0,
    overflow: "hidden",
  };

// const MODAL_TYPE_YESNO =  'modalTypeYesNo';
// const MODAL_TYPE_OK = 'modalTypeOk';

// export const MODAL_TYPES = {MODAL_TYPE_YESNO};


const ModalForm = (props) => {

    // const renderButton = useCallback(() => {
    //     switch (MODAL_TYPES) {
    //         case MODAL_TYPE_YESNO:
                
    //             break;
        
    //         default:
    //             break;
    //     }

    //     return (<>
        
    //             <button onClick={props.handleClick}>예</button>
    //     <button onClick={props.handleClose}>아니오</button></>)
    // }, []);


  return (

    <Modal
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <div className="modal-content">
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <div><FontAwesomeIcon icon={faCircleExclamation} /></div>
        <div>알림</div>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {props.text}
      </Typography>
      <Typography id="modal-modal-button" sx={{ mt: 2 }}>
        {/* {renderButton()} */}
        {props.children}
      </Typography>
      </div>
     
    </Box>
  </Modal>
  )
}

export default ModalForm