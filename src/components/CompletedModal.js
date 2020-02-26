import React from 'react';
import Modal from 'react-modal';



const CompletedModal = (props) => (
    <Modal
        isOpen={props.isCompletedModalOpen}
        contentLabel="Completed To-Do Confirmation"
        ariaHideApp={false}
        onRequestClose={props.closeCompletedModal}
        className="modal"
    >
        <h3 className="modal__title">Have you completed <span className="modal__task">"{props.tempCompletedToDo}"?</span></h3>
        <p className="modal__body">Clicking on yes this To-Do will be removed from your List</p>
        <button onClick={props.handleCompleted} className="button">Yes</button>
        <button onClick={props.closeCompletedModal} className="button button--secondary">No</button>
    </Modal>
);

export default CompletedModal;