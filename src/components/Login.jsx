import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userName, setUserName] = useState("Ronny"); // Fixed typo
    const [password, setPassword] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Fixed typo
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();

    function handleUserName(e) {
        setUserName(e.target.value); // Fixed typo
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevents form from refreshing the page
        if (userName === "Ronny" && password === "password") {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${userName}`);
        } else {
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
                    <button type="submit">Login</button> {/* Added type="submit" */}
                </div>
            </form>
        </div>
    );
}

export default Login;
