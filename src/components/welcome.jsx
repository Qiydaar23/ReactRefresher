import { Link, useParams } from "react-router-dom";
import "./welcome.css";
import { useState } from "react";
import axios from "axios";
import { retrieveHelloWorldBeab, retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";

function Welcome() {


    const { username } = useParams();

    const [message, setMessage] = useState(null)

    function callBackEnd(){
        // retrieveHelloWorldBeab()
        // .then((response) => successfulResponse(response))
        // .catch((error) =>errorReponse(error))
        // .finally(()=>console.log("clean up"))

        retrieveHelloWorldPathVariable("Ronny")
        .then((response) => successfulResponse(response))
        .catch((error) =>errorReponse(error))
        .finally(()=>console.log("clean up"))

    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)
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