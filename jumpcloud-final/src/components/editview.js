import React, {Component} from 'react';

class ToDoDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            updatedToDo: {
                id: this.props.todo.id,
                description: this.props.todo.description,
                completed: this.props.todo.completed,
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
                    <p>{this.props.todo.description}</p>
                    <p><input type="checkbox" checked={this.props.todo.completed}/></p>
                    <button onClick={this.props.deleteToDo.bind(null, this.props.todo.id)}>DELETE</button>
                    <button onClick={this.handleShow}>Edit</button>
                </li>
            </ul>
        </div>
  
        // <Modal show={this.state.show} onHide={this.handleClose}>
        //   <Modal.Header closeButton>
        //     <Modal.Title>{this.props.episode.title}</Modal.Title>
        //   </Modal.Header>
        //   <Modal.Body>
        //     <form onSubmit={this.handleEditSubmit}>
        //         Title: <input type="text" name="title" placeholder={this.props.episode.title} onChange={this.handleEditChange}/><br/>
        //         Description: <input type="text" name="description" placeholder={this.props.episode.description} onChange={this.handleEditChange}/><br/>
        //         Rating: <input type="number" name="rating" min="1" max="5" placeholder={this.props.episode.rating} onChange={this.handleEditChange}/><br/>
        //         <input type="submit"/>
        //     </form>
        //   </Modal.Body>
        //   <Modal.Footer>
        //     <Button onClick={this.handleClose}>Close</Button>
        //   </Modal.Footer>
        // </Modal>
    )}
}


export default ToDoDetail;