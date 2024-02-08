import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SelectPay = () => {
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
            navigate("/selectpay");
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
            <div className={`signup-mid-container-plan ${isVisible === null ? "pre" : isVisible ? "show" : "hide"}`}>
                
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

export default SelectPay;