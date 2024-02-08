import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Step1 = () => {
    const [isVisible, setIsVisible] = useState(null);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [agreement, setAgreement] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(null);
    const [isPasswordValid, setIsPasswordValid] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const validateEmail = (value) => {
        const trimmedValue = value.trim();
        console.log("Trimmed value:", trimmedValue);
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue);
        setIsEmailValid(isValid);
    }

    const validatePassword = (value) => {
        const isValid = value.length >= 8;
        setIsPasswordValid(isValid);
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        validateEmail(email)
        validatePassword(password)
        if (isEmailValid === true && isPasswordValid === true) {
            setIsVisible(false);
            setTimeout(() => {
                navigate("/Step2-Info", { state: { email, password } });
            }, 200);
        } else if (isEmailValid ===false) {
            setIsEmailValid(false);
        } else if (isPasswordValid === false) {
            setIsPasswordValid(false);
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
            <div className={`signup-mid-container-1  ${isVisible === null ? "pre" : isVisible ? "show" : "hide"}`}>
                <div className="signup-mid-text-1">
                    <p className="signup-step1-1">STEP 1 OF 3</p>
                    <p className="signup-step1-2">Create a password to start your membership</p>
                    <p className="signup-step1-3">Just a few more steps and you're done! We hate paperwork, too.</p>
                </div>
                <form
                    onSubmit={handleFormSubmit}
                    className="signup-form"
                >
                    <input
                        className="signup-form-input"
                        type="email"
                        placeholder="Email or phone number"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {isEmailValid == null ? "" : !isEmailValid &&
                        <p className="error-message">
                            <svg width="16" height="16" viewBox="0 0 16 16" fillRule="none" xmlns="http://www.w3.org/2000/svg" data-name="CircleX" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
                            Please enter a valid email address
                        </p>}
                    <input
                        className="signup-form-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {isPasswordValid == null ? "" : !isPasswordValid && 
                        <p className="error-message">
                            <svg width="16" height="16" viewBox="0 0 16 16" fillRule="none" xmlns="http://www.w3.org/2000/svg" data-name="CircleX" role="img" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
                            Password must be 8 characters or more
                        </p>}
                    <p className="signup-form-checkbox">
                        <input
                            type="checkbox"
                            className="signup-form-checkbox-input"
                            checked={agreement}
                            onChange={(e) => setAgreement(!agreement)}
                        />
                        <span className="signup-checkbox-text">
                            This is a fake website and this part usually asks for usage of personal information.
                        </span>
                    </p>
                    <p className="signup-form-checkbox">
                        <input
                            type="checkbox"
                            className="signup-form-checkbox-input"
                        />
                        <span className="signup-checkbox-text">
                            We all hate spam and usually this part asks for an optional email offer.    
                        </span>
                    </p>
                    <button className="signup-form-btn">Agree and Next</button>
                </form>
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

export default Step1;
