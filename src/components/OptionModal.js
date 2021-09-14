import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) =>  (
        <Modal
            isOpen={!!props.selectedOption}
            //!! significa dizer que strings são true e undefined é false
            onRequestClose={props.handleClose}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Opção escolhida</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button 
            onClick={props.handleClose}
            className="button"
            >
            Ok
            </button>
        </Modal>
    );

export default OptionModal;