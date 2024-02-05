import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Signup.css"

const Signup = () => {
    const [rememberLogin, setRememberLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {user, signUp} = UserAuth();
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password)
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="signup-container">
            <div className="signup-navbar">
                <Link to='/' className="signup-logo-c">
                    <img className="signup-logo" src="/assets/fakelogosmall.png" alt="logo" />
                </Link>
                <Link to='/signin' className="signup-signin-link">
                    Sign In
                </Link>
            </div>
            <hr className="signup-line" />
            <div className="signup-mid-container">

            </div>
            <div className="signup-bot-container">
                <p className="signup-bot-title">Fakeflix South Korea</p>
                <p className="signup-bot-text">This is a fake website</p>
                <p className="signup-bot-text">Representative: Jaehyeok Lee</p>
                <p className="signup-bot-text">Email: lee.david0706@gmail.com</p>
            </div>
        </div>
    )
}

export default Signup;