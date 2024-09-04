import React from "react";
import './ListToDo.scss'
import AddToDo from './AddToDo'

import { Bounce } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListToDo extends React.Component {
    state = {
        listTodos: [
            { id: "todo1", title: "Doing homework" },
            { id: "todo2", title: "Doing homework" },
            { id: "todo3", title: "Doing homework" },
        ],
        editTodo: {

        }
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        console.log("show toast")
        toast.success('sdf');

    }

    deleteTodo = (todo) => {
        let currentToDo = this.state.listTodos;
        currentToDo = currentToDo.filter(item => item.id != todo.id)
        this.setState({
            listTodos: currentToDo
        })
        toast.success("Delete success!")
    }
    editTodo = (todo) => {
        let { editTodo, listTodos } = this.state
        let isEmptyEditToDo = Object.keys(editTodo).length === 0
        if (isEmptyEditToDo === false && editTodo.id == todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item) => item.id == todo.id)
            listTodosCopy[objIndex].title = editTodo.title
            this.setState ({
                editTodo: {},
                listTodos: listTodosCopy
            })
        }
        else {
            this.setState({
                editTodo: todo
            })
        }
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        console.log(editTodoCopy)
        this.setState({
            editTodo: editTodoCopy
        })

    }
    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyEditToDo = Object.keys(editTodo).length === 0;
        return <>
            <div className="list-todo-container">
                <div className="list-todo-content">
                    <AddToDo addNewTodo={this.addNewTodo}></AddToDo>
                    {
                        listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {
                                        isEmptyEditToDo === true ?
                                            <span>{index + 1}-{item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>{index + 1} - <input value={this.state.editTodo.title} onChange={(event) => this.handleOnChangeEditTodo(event)} /></span>
                                                    :
                                                    <span>{index + 1}-{item.title}</span>

                                                }
                                            </>
                                    }
                                    <button className="edit" onClick={(event) => this.editTodo(item)}>
                                        {
                                            isEmptyEditToDo === false && editTodo.id == item.id ?
                                                'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="delete" onClick={(event) => this.deleteTodo(item)}>Delete</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    }
}

export default ListToDo