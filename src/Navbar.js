import './Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/test" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Test</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cards" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>cards</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/ternary" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>ternary</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/toggle" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>toggle</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/meme" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>meme</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/increment" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>increment</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/search-filter" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>search filter</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/api" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>api</NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/firebase" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>firebase</NavLink> 
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
