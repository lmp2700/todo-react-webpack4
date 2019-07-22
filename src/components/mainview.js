import React, { Component } from 'react';
import NewToDo from './newview';
import ToDoList from './listview';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      todos: [],
      newTodos: {
        "description": "",
        "done": false
      }
    }
  }

  componentDidMount() {
    this.getToDoList().then((todos) => {
      this.setState({todos: todos});
    }).catch((err) => {
      console.log(err)
    })
  }

  handleNewChange = (e) => {
    console.log("handleNewChange")
    this.setState({
        newToDos: {
            ...this.state.newToDos,
            [e.currentTarget.name]: e.currentTarget.value
        }
    })
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  getToDoList = async () => {
    try {
      const toDoAPI = await fetch('/api/todos', {
        method: "GET",
        credentials: 'include'
      });
      const toDoAPIJson = await toDoAPI.json();
      return toDoAPIJson;
    } catch(err) {
      return(err)
    }
  }

  createToDo = async (e) => {
    e.preventDefault();
    console.log("createToDo")
    const newToDo = await fetch('/api/todos/', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(this.state.newToDo),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const newToDoParsed = await newToDo.json();
    console.log(newToDoParsed)
    if(newToDoParsed.status === 200) {
      document.getElementById("new-todo-form").result();
      this.setState({
        todos: [...this.state.todos, newToDoParsed.data]
      })
      console.log("created todo")
    }
  }

  updateToDo = async (todoInfo) => {
    console.log("updateToDo")
    const updateToDo = await fetch('/api/todos/', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(todoInfo)
    })
    const response = await updateToDo.json();
    console.log(response)
    this.setState({
      todos: this.state.todos.map((todo) => {
        return todo.id === response.data.id ? response.data : todo
      })
    })
    console.log("updated todo")
  }

  deleteToDo = async (id, e) => {
    console.log("deleteToDo")
    const deleteToDo = await fetch('/api/todos/' + id, {
      method: "DELETE",
      credentials: 'include'
    })
    const deletedToDoParsed = await deleteToDo.json();
    console.log(deletedToDoParsed)
    if(deletedToDoParsed === 200) {
      this.setState({
        todos: this.state.todos.filter((todo) => {
          return todo.id != id
        })
      })
      console.log("deleted todo")
    }
  }

  render() {
    if(this.state.hasError === true) {
      return (
        <main className="wrapper">
          <div className="box header"> 
            <h1>To Do List</h1>
          </div>
          <div className="box sidebar">
            <ion-icon name="sad"></ion-icon>
          </div>
          <div className="box content">
            <NewToDo createToDo={this.createToDo} handleNewChange={this.handleNewChange} />
            <hr></hr>
            Error loading To Do List
          </div>
          <div className="box footer">
          </div>
        </main>
      ) 
    } 
    return (  
      <main className="wrapper">
        <div className="box header"> 
          <h1>To Do List</h1>
        </div>
        <div className="box sidebar">
          Make <ion-icon name="arrow-round-forward"></ion-icon>
        </div>
        <div className="box content">
          <NewToDo createToDo={this.createToDo} handleNewChange={this.handleNewChange} />
          <hr></hr>
          <ToDoList updateToDo={this.updateToDo} deleteToDo={this.deleteToDo} todos={this.state.todos} />
        </div>
        <div className="box footer">
        </div>
      </main>
    )
  }
}

export default Main;