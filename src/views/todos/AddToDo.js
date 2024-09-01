import React from "react";
import 'react-toastify/dist/ReactToastify.css';

class AddToDo extends React.Component {

    state = {
        title: ''
    }
    handleOneChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            alert ('missising title')
            return
        }
        let todo = {
            id: Math.floor (Math.random()*10000),
            title: this.state.title
        }
        this.props.addNewTodo (todo);
    }
    render() {
        return (
            <div className="add-todo">
                <input type="text" onChange={(event) => { this.handleOneChangeTitle(event) }} />
                <button type="button" onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}
export default AddToDo;