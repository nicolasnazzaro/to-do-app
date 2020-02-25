import React from 'react';
import Modal from 'react-modal';



const CompletedModal = (props) => (
    <Modal
        isOpen={props.isCompletedModalOpen}
        contentLabel="Completed To-Do Confirmation"
        ariaHideApp={false}
        onRequestClose={props.closeCompletedModal}
    >
        <h3>Have you completed <span>{props.tempCompletedToDo}</span>?</h3>
        <p>Clicking on yes this To-Do will be removed from your List</p>
        <button onClick={props.handleCompleted}>Yes</button>
        <button onClick={props.closeCompletedModal}>No</button>
    </Modal>
);

export default CompletedModal;