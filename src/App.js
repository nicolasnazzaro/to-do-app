import React from 'react';
import Header from './components/Header';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import CompletedModal from './components/CompletedModal';


class App extends React.Component {
  state = {
    toDos: [],
    isCompletedModalOpen: false,
    tempCompletedToDo: ''
  }
  handleAddToDo = (toDo) => {
    if (!toDo) {
      return 'Enter valid value to add a To-Do';
    } else if (this.state.toDos.indexOf(toDo) > -1) {
      return 'This to-do already exists';
    }

    this.setState((prevState) => ({
      toDos: prevState.toDos.concat(toDo)
    }));
  };
  handleCompletedModal = (toDo) => {
    this.setState(() => ({
      tempCompletedToDo: toDo,
      isCompletedModalOpen: true
    }));
  };
  closeCompletedModal = () => {
    this.setState(() => ({
      isCompletedModalOpen: false
    }));
  };
  handleCompleted = () => {
    const toRemove = this.state.tempCompletedToDo;
    this.setState((prevState) => ({
      toDos: prevState.toDos.filter((toDo) => toRemove !== toDo),
      isCompletedModalOpen: false,
      tempCompletedToDo: ''
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('toDos');
      const toDos = JSON.parse(json);

      if (toDos) {
        this.setState(() => ({ toDos }));
      }
    } catch (e) {

    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.toDos.length !== this.state.toDos.length) {
      const json = JSON.stringify(this.state.toDos);
      localStorage.setItem('toDos', json);
    }
  };
  render() {
    return (
      <div>
        <Header />
        <ToDos items={this.state.toDos} 
          handleCompletedModal={this.handleCompletedModal}
        />
        <AddToDo 
          handleAddToDo={this.handleAddToDo}  
        />
        <CompletedModal 
          handleCompleted={this.handleCompleted}
          closeCompletedModal={this.closeCompletedModal}
          isCompletedModalOpen={this.state.isCompletedModalOpen}
        />
      </div>
    )
  };
}

export default App;
