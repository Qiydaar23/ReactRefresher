import { useState } from "react"

function ListToDos(){

    const todos = [
        {id:1, description: 'Learn AWS'},
        {id:2, description: 'Learn C++'},
        {id:3, description: 'Learn C'},
        {id:4, description: 'Learn More'},
        {id:5, description: 'Learn To Learn'}
    ]


    return(
        <div>
            <h1>Things You Want To Do</h1>
            <h6>Todo Details</h6>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((todo)=>(
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListToDos