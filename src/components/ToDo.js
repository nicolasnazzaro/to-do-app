import React from 'react';


const ToDo = (props) => (
    <div className="to-do">
        <p className="to-do__text">{props.count}. {props.toDo}</p>
        <button
            className="button button--link" 
            onClick={(e) => {
                props.handleCompletedModal(props.toDo);
            }}
        >
            Completed
        </button>
    </div>
);

export default ToDo;