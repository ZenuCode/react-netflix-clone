import "./Signup.css";
import "./Planform.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PlanFormComp from "../../components/PlanFormComp";
import data from './PlanformData.js';

const PlanForm = () => {
    const [isVisible, setIsVisible] = useState(null);
    const navigate = useNavigate();

    const one = data.one;
    const two = data.two;
    const three = data.three;

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);

    const handleNavigate = () => {
        setIsVisible(false);
        setTimeout(() => {
            navigate("/Step2Main");
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
                <p>STEP 2 OF 3</p>
                <p>Choose the plan that’s right for you</p>
                <div className="planform-component-container">
                    <PlanFormComp data={one}/>
                    <PlanFormComp data={two}/>
                    <PlanFormComp data={three}/>
                </div>
                <p></p>
                <p></p>
                <p></p>
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

export default PlanForm;