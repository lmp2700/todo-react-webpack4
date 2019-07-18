import React from 'react';
import ToDoDetail from './editview';

const ToDoList = (props) => {
    const todos = props.todos.map((todo) => {
       return( <ToDoDetail updateToDo={props.updateToDo} key={todo.id} todo={todo} deleteToDo={props.deleteToDo}/>)
    })
    return(
        <div>
        {todos}
        </div>
    )
}

export default ToDoList;