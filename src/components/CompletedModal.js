import React from 'react';
import Modal from 'react-modal';


const CompletedModal = (props) => (
    <Modal
        isOpen={props.isCompletedModalOpen}
        contentLabel="Completed To-Do Confirmation"
        ariaHideApp={false}
    >
        <h3>Have you completed this To-Do?</h3>
        <p>Clicking on yes <b>{props.tempCompletedToDo}</b> will be removed from your To-Do List</p>
        <button onClick={props.handleCompleted}>Yes</button>
        <button onClick={props.closeCompletedModal}>No</button>
    </Modal>
);

export default CompletedModal;