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
  render() {
    return (
      <div>
        <Header />
        <AddToDo handleAddToDo={this.handleAddToDo} />
        <ToDos />
      </div>
    )
  };
}

export default App;
