import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import './Signin.css';


const Signin = () => {
    const [rememberLogin, setRememberLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { user, logIn } = UserAuth();
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await logIn(email, password);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="signin-top-container">
                <Link to='/' className="signin-login-logo">
                    <img className="signin-logo" src="/assets/fakelogo.png" alt="logo" />
                </Link>
                <div className="signin-container">
                    <div className="signin-box">
                        <p className="signin-title">Sign In</p>
                        <form
                            onSubmit={handleFormSubmit}
                            className="signin-form-page"
                        >
                            <input
                                className="signin-form-input"
                                type="email"
                                placeholder="Email or phone number"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="signin-form-input"
                                type="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="signin-form-btn-submit">Sign In</button>
                            <button className="signin-form-btn-find-pw">Forgot Password?</button>
                        </form>
                        <div className="signin-form-bot">
                            <p className="signin-form-bot-1">
                                <input
                                    type="checkbox"
                                    className="signin-form-checkbox"
                                    checked={rememberLogin}
                                    onChange={(e) => setRememberLogin(!rememberLogin)}
                                    value="Remember Me"
                                />
                                <span className="signin-checkbox-text">Remember Me</span>
                            </p>
                            <p className="signin-form-bot-3">
                                <span>New to Netflix?</span>
                                <Link to='/signup' className="signin-signup-link">Sign up now.</Link>
                            </p>
                            <p className="signin-form-bot-4">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                        </div>
                    </div>
                </div>
                <div className="signin-bot-container">
                    <p className="signin-bot-title">Fakeflix South Korea</p>
                    <p className="signin-bot-text">This is a fake website</p>
                    <p className="signin-bot-text">Representative: Jaehyeok Lee</p>
                    <p className="signin-bot-text">Email: lee.david0706@gmail.com</p>
                </div>
            </div>
        </>
    )
}

export default Signin;