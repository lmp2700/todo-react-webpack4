import React, {Component} from 'react';

class ToDoDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            updatedToDo: {
                id: this.props.todo.id,
                description: this.props.todo.description,
                done: this.props.todo.completed,
            }
        }
    }
    handleClose = () => {
        this.setState({ show: false });
      }
    
    handleShow = () => {
        this.setState({ show: true });
    }

    handleEditChange = (e) => {
        this.setState({
            updatedToDo: {
                ...this.state.updatedToDo,
                [e.currentTarget.name] : e.currentTarget.value
            }
        })
    }
    handleEditSubmit = (e) => {
        e.preventDefault();
        this.handleClose();
        this.props.updateToDo(this.state.updatedToDo);
    }

    render(){
    return(
        <div>
            <ul>
                <li key={this.props.todo.id}>
                   {this.props.todo.id + ' .'} {this.props.todo.description} <input type="checkbox" done={this.props.todo.completed} className="checkbox"/><button onClick={this.handleShow} className="button">Edit</button><button onClick={this.props.deleteToDo.bind(null, this.props.todo.id)} className="button">Delete</button>
                </li>
            </ul>
        </div>
    )}
}


export default ToDoDetail;