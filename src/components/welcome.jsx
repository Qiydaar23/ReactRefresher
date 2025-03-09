import { Link, useParams } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
    const { username } = useParams(); 

    return (
        <>
            <h1>Welcome {username}!</h1>
            <Link to="/todoList">Your To-Do List</Link>
        </>
    );
}

export default Welcome;
