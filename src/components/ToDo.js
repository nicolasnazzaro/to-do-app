import React from 'react';


const ToDo = (props) => (
    <div>
        <p>{props.count}. {props.toDo}</p>
        <button 
            onClick={(e) => {
                props.handleCompleted(props.toDo);
            }}
        >
            Completed
        </button>
    </div>
);

export default ToDo;