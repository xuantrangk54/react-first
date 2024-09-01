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
        ]
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        console.log("show toast")
        toast.error('sdf');

    }
    render() {
        let { listTodos } = this.state;
        return <>
            <div className="list-todo-container">
                <div className="list-todo-content">
                    <AddToDo addNewTodo={this.addNewTodo}></AddToDo>
                    {
                        listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1}-{item.title}</span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
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