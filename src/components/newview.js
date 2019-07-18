import React from 'react';

const NewToDo = (props) => {
    return(
        <form id="new-todo-form" onSubmit={props.createToDo}>
            Add To Do: <input type="text" name="description" onChange={props.handleNewChange}/>
            <input type="submit" value="Add To Do"/>
        </form>
    )
}

export default NewToDo;