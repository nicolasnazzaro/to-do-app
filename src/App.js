import React from 'react';
import Header from './components/Header';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';


class App extends React.Component {
  state = {
    toDos: []
  }
  render() {
    return (
      <div>
        <Header />
        <AddToDo />
        <ToDos />
      </div>
    )
  };
}

export default App;
