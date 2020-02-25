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
                {this.state.error && <p className="add-to-do-error">{this.state.error}</p>}
                <form onSubmit={this.handleAddToDo} className="add-to-do">
                    <input type="text" className="add-to-do__input" name="newToDo" />
                    <button className="button">Add To-Do</button>
                </form>
            </div>
        );
    }
}

export default AddToDo;