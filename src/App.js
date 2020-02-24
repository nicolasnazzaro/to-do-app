import React from 'react';
import Header from './components/Header';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';


class App extends React.Component {
  state = {
    toDos: []
  }
  handleAddToDo = (toDo) => {
    if (!toDo) {
      return 'Enter valid value to add a to-do';
    } else if (this.state.toDos.indexOf(toDo) > -1) {
      return 'This to-do already exists';
    }

    this.setState((prevState) => ({
      toDos: prevState.toDos.concat(toDo)
    }));
  };
  handleCompleted = (toDoCompleted) => {
    this.setState((prevState) => ({
      toDos: prevState.toDos.filter((toDo) => toDoCompleted !== toDo)
    }));
  };
  render() {
    return (
      <div>
        <Header />
        <ToDos items={this.state.toDos} 
          handleCompleted={this.handleCompleted}
        />
        <AddToDo 
          handleAddToDo={this.handleAddToDo} 
          />
      </div>
    )
  };
}

export default App;
