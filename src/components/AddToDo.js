import React from 'react';


class AddToDo extends React.Component {
    state = {
        error: ''
    }
    handleAddToDo = (e) =>{
        e.preventDefault();
        const toDo = e.target.elements.newToDo.value.trim();
        const error = this.props.handleAddToDo(toDo);

        this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.newToDo.value = '';
    }
    };
    render() {
        return(
            <div>
                <form onSubmit={this.handleAddToDo}>
                    <input type="text" name="newToDo" />
                    <button>Add To-Do</button>
                </form>
            </div>
        );
    }
}

export default AddToDo;