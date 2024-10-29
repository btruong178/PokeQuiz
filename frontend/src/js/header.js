import '../css/Header.css';
import { Link } from "react-router-dom";
export function Header() {
    return (
        <header>
            <h1>My React App</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}