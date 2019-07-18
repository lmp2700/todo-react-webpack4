import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import style from './styles/style.css';
import Main from './components/mainview'; // main page
import ToDoList from './components/listview'; // list of todos
import CreateList from './components/newview'; // create a new todo
import EditToDo from './components/editview'; // edit/delete todo

const my404 = () => {
  return (
    <div>
      <h1>To Do List Unavailable</h1>
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/todos" component={ ToDoList } />
          <Route exact path="/create" component={ CreateList } />
          <Route exact path="/edit" component={ EditToDo } />
          <Route component={ my404 } />
        </Switch>
      </div>
    );
  }
}

export default App;