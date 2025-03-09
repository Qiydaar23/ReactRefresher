import { Link } from "react-router-dom"

function Welcome(){

    return(
        <>
        <h1>Welcome name of user</h1>
        <Link to="/todoList">Your To Do List</Link>
        </>
    )
}
export default Welcome