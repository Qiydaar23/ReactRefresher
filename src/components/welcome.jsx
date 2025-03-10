import { Link, useParams } from "react-router-dom";
import "./welcome.css";
import axios from "axios";
import { useState } from "react";

function Welcome() {


    const { username } = useParams();

    const [message, setMessage] = useState(null)

    function callBackEnd(){
        axios.get('http://localhost:8080/hello-world')
        .then((response)=> successfulResponse(response))
        .catch((error)=> errorReponse(error))
        .finally(()=>(console.log('cleanup')))
    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data)
    }

    function errorReponse(error){
        console.log(error)
    }

    return (
        <>
            <div>
                <h1>Welcome {username}!</h1>
                <Link to="/todoList">Your To-Do List</Link>
            </div>
            <div>
                <button onClick={callBackEnd}>Call hello-world REST API</button>
            </div>
            <div>{message}</div>
        </>
    );
}

export default Welcome;