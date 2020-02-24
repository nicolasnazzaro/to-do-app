import React from 'react';


class AddToDo extends React.Component {
    state = {
        error: ''
    }
    render() {
        return(
            <div>
                <form>
                    <input type="text" name="newToDo" />
                    <button>Add To-Do</button>
                </form>
            </div>
        );
    }
}

export default AddToDo;