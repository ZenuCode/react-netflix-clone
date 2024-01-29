import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const [language, setLanguage] = useState("English");
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();

    const seeLanguage = () => {
        setDropdown(!dropdown);
    };

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
                    <div className="nav-left">
                        <DropdownButton className="lang-btn" title={language}>
                            <Dropdown.Item className="lang-ele">English</Dropdown.Item>
                            <Dropdown.Item className="lang-ele">Korean</Dropdown.Item>
                        </DropdownButton>

                        <button onClick={handleLogout} className="signinout-btn">
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="nav-left">
                        <DropdownButton className="lang-btn" title={language}>
                            <Dropdown.Item className="lang-ele">English</Dropdown.Item>
                            <Dropdown.Item className="lang-ele">Korean</Dropdown.Item>
                        </DropdownButton>
                        
                        <Link to='/signup'>
                            <button className="signinout-btn">Sign In</button>
                        </Link>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar;