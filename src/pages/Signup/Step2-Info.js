import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"

const Step2Info = () => {
    const [isVisible, setIsVisible] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100); 
    }, []);

    const handleNavigate = () => {
        setIsVisible(false);
        setTimeout(() => {
            navigate("/planform");
        }, 200); 
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
            <div className={`signup-mid-container ${isVisible === null ? "pre" : isVisible ? "show" : "hide"}`}>
                <img src="/assets/step2-1.png" alt="signup1" />
                <p className="signup-step2-1">STEP 2 OF 3</p>
                <p className="signup-step2-2">Choose your plan.</p>
                <ul class="signup-step2-3-row" data-uia="checkmark-group+row-0">
                    <svg className="signup-step2-3-check" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon default-ltr-cache-4z3qvp e1svuwfo1" data-name="Checkmark" aria-hidden="true">
                        <path className="signup-step2-3-check" fillRule="evenodd" clipRule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path>
                    </svg>
                    <span className="signup-step2-3-text" data-uia="checkmark-group+row-0+content">
                        No commitments, cancel anytime.
                    </span>
                </ul>
                <ul class="signup-step2-3-row" data-uia="checkmark-group+row-0">
                    <svg className="signup-step2-3-check" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon default-ltr-cache-4z3qvp e1svuwfo1" data-name="Checkmark" aria-hidden="true">
                        <path className="signup-step2-3-check" fillRule="evenodd" clipRule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path>
                    </svg>
                    <span className="signup-step2-3-text" data-uia="checkmark-group+row-0+content">
                        Endless entertainment for one low price.
                    </span>
                </ul>
                <ul class="signup-step2-3-row" data-uia="checkmark-group+row-0">
                    <svg className="signup-step2-3-check" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon default-ltr-cache-4z3qvp e1svuwfo1" data-name="Checkmark" aria-hidden="true">
                        <path className="signup-step2-3-check" fillRule="evenodd" clipRule="evenodd" d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z" fill="currentColor"></path>
                    </svg>
                    <span className="signup-step2-3-text" data-uia="checkmark-group+row-0+content">
                        Enjoy Netflix on all your devices.
                    </span>
                </ul>
                <button className="signup-step2-btn" onClick={handleNavigate}>Next</button>
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

export default Step2Info;