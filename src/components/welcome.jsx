import { Link, useParams } from "react-router-dom";

function Welcome() {
    const { username } = useParams(); // Correct usage of useParams()

    return (
        <>
            <h1>Welcome {username}!</h1>
            <Link to="/todoList">Your To-Do List</Link>
        </>
    );
}

export default Welcome;
