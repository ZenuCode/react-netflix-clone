import "./Signup.css";
import "./Planform.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PlanFormComp from "../../components/PlanFormComp";
import data from './PlanformData.js';

const PlanForm = () => {
    const [isVisible, setIsVisible] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(1);
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
            navigate("/selectpay");
        }, 300);
    }

    const handlePlanClick = (planIndex) => {
        setSelectedPlan(planIndex);
    };

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
                <div className="planform-step-container">
                    <p className="planform-step-title">STEP 2 OF 3</p>
                    <p className="planform-step-title-info">Choose the plan that’s right for you</p>
                </div>
                <div className="planform-component-container">
                    <PlanFormComp data={one} planIndex={1} onClick={handlePlanClick} selectedPlan={selectedPlan} isSelected={selectedPlan === 1} />
                    <PlanFormComp data={two} planIndex={2} onClick={handlePlanClick} selectedPlan={selectedPlan} isSelected={selectedPlan === 2} />
                    <PlanFormComp data={three} planIndex={3} onClick={handlePlanClick} selectedPlan={selectedPlan} isSelected={selectedPlan === 3} />
                </div>
                <div className="planform-info-container">
                    <p className="planform-info">Learn more about an ad-supported plan. If you select an ad-supported plan, you will be required to provide your date of birth for ads personalization and other purposes consistent with the Netflix Privacy Statement.</p>
                    <p className="planform-info">Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See Terms of Use for more details.</p>
                    <p className="planform-info">Only people who live with you may use your account. Add 1 extra member with Standard or up to 2 with Premium. Learn more. Watch on 4 different devices at the same time with Premium and 2 with Standard or Standard with ads.</p>
                </div>
                <button className="planform-btn" onClick={handleNavigate}>Next</button>
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