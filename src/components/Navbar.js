import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav-container">
            <Link to='/'>
                <h1 className="logo">NETFLIX</h1>
            </Link>

            <div>
                <Link to='/login'>
                    <button className="login-btn btn1">Login</button>
                </Link>
                <Link to='/signup'>
                    <button className="signup-btn btn1">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;