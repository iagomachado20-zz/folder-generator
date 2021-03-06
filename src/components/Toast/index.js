import React from 'react';
import Toast from 'react-bootstrap/Toast';

const ToastBox = ({text, onClose}) => {
    return (
        <Toast 
            onClose={() => onClose()} 
            show={text !== undefined && text !== null} 
            delay={2500} 
            autohide>
          <Toast.Body>{ text }</Toast.Body>
        </Toast>   
    )
};  

export default ToastBox;

