import React from 'react';

const NewToDo = (props) => {
    return(
        <form id="new-todo-form" onSubmit={props.createToDo}>
            <input type="text" name="description" onChange={props.handleNewChange}/><input type="checkbox" name="done" value="false" className="checkbox" onChange={props.handleNewChange}/><input type="submit" className="button" value="Add"/>
        </form>
    )
}

export default NewToDo;