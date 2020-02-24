import React from 'react';
import ToDo from './ToDo';


const ToDos = (props) => (
    <div>
        <h3>Your To-Dos</h3>
        <div>
            {props.items.length === 0 && <p>You don't have any to-do in your list</p>}
            {
                props.items.map((item, i) => (
                    <ToDo 
                        key={item}
                        count={i + 1} 
                        toDo={item}
                        handleCompletedModal={props.handleCompletedModal} 
                    />
                ))
            }
        </div>
    </div>
);

export default ToDos;