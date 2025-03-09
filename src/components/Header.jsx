import { Link } from "react-router-dom";
import "./header.css";
import { AuthContext, useAuth } from "./AuthContext";
import { useContext } from "react";


function Header() {

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    return (
        <header>
            <div className="nav-links">
            {isAuthenticated && <Link to="/welcome">Home</Link>}
            {isAuthenticated && <Link to="/logout">Logout</Link>}
            {!isAuthenticated && <Link to="/login">Login</Link>}
                <div>{authContext.number}</div>
            </div>

            <ul className="nav-bar">
                <li className="nav-item">
                    <a href="https://github.com/Qiydaar23" target="_blank" rel="noopener noreferrer">GITHUB</a>
                </li>
                <li className="nav-item">
                    <a href="https://medium.com/@qiydaarwilliams23" target="_blank" rel="noopener noreferrer">BLOG</a>
                </li>
                <li className="nav-item">
                    <a href="https://www.linkedin.com/in/qiydaarwilliams23/" target="_blank" rel="noopener noreferrer">CONTACT ME</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
