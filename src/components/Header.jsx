import { Link } from "react-router-dom";
import "./header.css";  // Import the CSS file

function Header() {
    return (
        <header>
            <div className="nav-links">
                <Link to="/welcome">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>
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
