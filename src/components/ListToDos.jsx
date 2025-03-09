import { useState } from "react";
import "./listTodos.css";  // Import the CSS file

function ListToDos() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate()); // Fixed today.getDay() to today.getDate()

    const todos = [
        { id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
        { id: 2, description: 'Learn C++', done: false, targetDate: targetDate },
        { id: 3, description: 'Learn C', done: false, targetDate: targetDate },
        { id: 4, description: 'Learn More', done: false, targetDate: targetDate },
        { id: 5, description: 'Learn To Learn', done: false, targetDate: targetDate }
    ];

    return (
        <div>
            <h1>Things You Want To Do</h1>
            <h6>Todo Details</h6>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Due Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListToDos;
