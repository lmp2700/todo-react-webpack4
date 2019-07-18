import React, { Component } from 'react';
import NewToDo from './newview';
import ToDoList from './listview';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodos: {
        "description": "",
        "completed": false
      }
    }
  }

  getToDoList = async () => {
    try {
      const toDoAPI = await fetch('http://localhost:8004/api/todos', {
        method: "GET",
        credentials: 'include'
      });
      console.log(toDoAPI)
      const toDoAPIJson = await toDoAPI.json();
      console.log(toDoAPIJson)
      return toDoAPIJson;
    } catch(err) {
      return(err)
    }
  }

  createToDo = async (e) => {
    e.preventDefault();
    const newToDo = await fetch('http://localhost:8004/api/todos', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(this.state.newToDos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const newToDoParsed = await newToDo.json();
    if(newToDoParsed.status === 200) {
      document.getElementById("new-todo-form").result();
      this.setState({
        todos: [...this.state.todos, newToDoParsed.data]
      })
    }
  }

  deleteToDo = async (e) => {
    const deleteToDo = await fetch('http://localhost:8004/api/todos' + id, {
      method: "DELETE",
      credentials: 'include'
    })
    const deletedToDoParsed = await deleteToDo.json();
    if(deletedToDoParsed === 200) {
      this.setState({
        todos: this.state.todos.filter((todo) => {
          return todo._id != id
        })
      })
    }
  }

  updateToDo = async (todoInfo) => {
    const updateToDo = await fetch('http://localhost:8004/api/todos', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(todoInfo)
    })
    const response = await updateToDo.json();
    this.setState({
      todos: this.state.todos.map((todo) => {
        return todo._id === response.data._id ? response.data : todo
      })
    })
  }

  componentDidMount() {
    this.getToDoList().then((todos) => {
      this.setState({todos: todos});
    }).catch((err) => {
      console.log(err)
    })
  }

  handleNewChange = (e) => {
    console.log(this.state.newToDos)
    this.setState({
        newToDos: {
            ...this.state.newToDos,
            [e.currentTarget.name]: e.currentTarget.value
        }
    })
}

onCreate = () => {
  this.props.history.push("/create")
}

onView = () => {
  this.props.history.push("/todos")
}

onEdit = () => {
  this.props.history.push("/edit")
}

  render() {
    return (  
      <main className="wrapper">
        <div className="box header"> 
          <h1>To Do List</h1>
        </div>
        <div className="box sidebar">
          Select <ion-icon name="arrow-round-down"></ion-icon>
        </div>
        <div className="box content">
          <label className="intro">A simple to-do application</label>
          <NewToDo createToDo={this.createToDo} handleNewChange={this.handleNewChange} />
          <ToDoList updateToDo={this.updateToDo} deleteToDo={this.deleteToDo} todos={this.state.todos} />
        </div>
        <div className="box footer">
          <ion-icon name="add-circle" onClick={this.onCreate} title="Add to Your List"></ion-icon>
          <ion-icon name="list-box" onClick={this.onView} title="View Your List"></ion-icon> 
          <ion-icon name="create" onClick={this.onEdit} title="Edit Your List"></ion-icon>
        </div>
      </main>
    )
  }
}

export default Main;