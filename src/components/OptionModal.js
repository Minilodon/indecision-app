import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) =>  (
        <Modal
            isOpen={!!props.selectedOption}
            //!! significa dizer que strings são true e undefined é false
            onRequestClose={props.handleClose}
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClose}>Okay</button>
        </Modal>
    );

export default OptionModal;