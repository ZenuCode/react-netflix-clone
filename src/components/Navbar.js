import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
    const {user, logOut} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="nav-container">
            <Link to='/'>
                <img className="logo" src="/assets/fakelogo.png" alt="logo" />
            </Link>

            {
                user?.email ? (
                    <div>
                        <Link to='/profile'>
                            <button className="login-btn btn1">Profile</button>
                        </Link>
                        <button onClick={handleLogout} className="signup-btn btn1">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link to='/login'>
                            <button className="login-btn btn1">Login</button>
                        </Link>
                        <Link to='/signup'>
                            <button className="signup-btn btn1">Sign Up</button>
                        </Link>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar;