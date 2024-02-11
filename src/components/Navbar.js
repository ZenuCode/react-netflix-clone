import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Navbar = (props) => {
    const { user, logOut } = UserAuth();
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
                <img className="nav-logo" src="/assets/fakelogo.png" alt="logo" />
            </Link>

            {
                user?.email ? (
                    <div className="nav-left">
                        {props.profile ?
                            <Link to='/profile'>
                                <button className="nav-profile-btn">Profile</button>
                            </Link>
                            :
                            <select className="nav-lang-btn">
                                <option className="nav-lang-ele">English</option>
                                <option className="nav-lang-ele">Korean</option>
                            </select>
                        }
                        <button onClick={handleLogout} className="nav-signinout-btn">
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="nav-left">
                        {props.profile ?
                            <Link to='/profile'>
                                <button className="nav-profile-btn">Profile</button>
                            </Link>
                            :
                            <select className="nav-lang-btn">
                                <option className="nav-lang-ele">English</option>
                                <option className="nav-lang-ele">Korean</option>
                            </select>
                        }

                        <Link to='/signin'>
                            <button className="nav-signinout-btn">Sign In</button>
                        </Link>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar;