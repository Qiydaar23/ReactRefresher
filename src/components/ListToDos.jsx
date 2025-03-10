import { useState, useEffect } from "react";
import "./listTodos.css";
import { retrieveAllTodosForUsername, deleteTodoForUser } from "./api/TodoApiService";

function ListToDos() {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        refreshTodos();
    }, []);

    function refreshTodos() {
        retrieveAllTodosForUsername("Ronny")
            .then(response => {
                console.log("Fetched Todos:", response.data); // Debugging
                setTodos(response.data);
            })
            .catch(error => {
                console.error("Error fetching todos:", error);
                setError("Failed to fetch todos. Please try again.");
            });
    }

    function deleteTodo(id){
        deleteTodoForUser('Ronny', id)
        .then( ()=> {
            setMessage(`Deleted todo with id #${id} successful`)
            refreshTodos()
        } )
        .catch()
    }

    return (
        <div>
            <h1>Things You Want To Do</h1>
            <h6>Todo Details</h6>
            {message && <div>{message}</div>}
            {error && <div className="error-message">{error}</div>}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Due Date</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.length > 0 ? (
                            todos.map((todo) => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done ? "✔️" : "❌"}</td>
                                    <td>{new Date(todo.targetDate).toDateString()}</td>
                                    <td><button onClick={()=> deleteTodo(todo.id)}>Delete</button></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No To-Do items found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListToDos;
