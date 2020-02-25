import React from 'react';
import ToDo from './ToDo';


const ToDos = (props) => (
    <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your To-Dos</h3>
        </div>
        <div>
            {props.items.length === 0 && <p className="widget__message">You don't have any to-do in your list</p>}
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