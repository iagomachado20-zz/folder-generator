import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalBox = ({ title = 'Título', text = "descrição", onClose, show, onAccept}) => {
    return (
        <Modal 
            onClose={() => onClose()}
            backdrop="static"
            keyboard 
            show={show}>
            <Modal.Header closeButton>
                <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {text}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => onClose()}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => onAccept()}>Ok</Button>
            </Modal.Footer>
        </Modal>   
    )
};  

export default ModalBox;

