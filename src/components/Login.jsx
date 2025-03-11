import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import { useAuth } from './AuthContext';

function Login() {
    const [userName, setUserName] = useState("Ronny");
    const [password, setPassword] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth()

    function handleUserName(e) {
        setUserName(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (userName === "Ronny" && password === "password") {
            authContext.setIsAuthenticated(true)
            setUserName(userName)
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${userName}`);

        } else {
            authContext.setIsAuthenticated(false)
            setUserName(false)
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failed! Please check your credentials.</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input
                        name="username"
                        type="text"
                        placeholder="Enter username"
                        value={userName}
                        onChange={handleUserName}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
