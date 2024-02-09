import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import "./SelectPay.css";

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
            navigate("/payment-loading");
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
            <div className={`signup-mid-container-payment ${isVisible === null ? "pre" : isVisible ? "show" : "hide"}`}>
                <div className="select-pay-info-container">
                    <img src="/assets/selectpay.png" alt="selectpay" />
                    <p className="select-pay-step">STEP 3 OF 3</p>
                    <p className="select-pay-info-top">Choose how to pay</p>
                    <p className="select-pay-info-mid">Your payment is encrypted and you can change how you pay anytime.</p>
                    <p className="select-pay-info-bot">Secure for peace of mind. Cancel easily online.</p>
                </div>
                <div className="select-pay-container">
                    <div className="e2e">
                        <p className="e2e-info">End-to-end encrypted</p>
                        <img className="e2e-image" src="/assets/selectpay-lock.png" alt="lock" />
                    </div>
                    <button className="pay-btn credit-btn" onClick={handleNavigate}>
                        <div className="button-left-column">
                            <p className="button-left-column-text">Credit or Debit Card</p>
                            <div className="card-img-column-container">
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BC.png" alt="BC Card" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/Hana.png" alt="Hana Card" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/Hana@2x.png 2x" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/Hyundai.png" alt="Hyundai Card" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/Hyundai@2x.png 2x" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/KB.png" alt="KB Card" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/KB@2x.png 2x" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/Lotte.png" alt="Lotte Card" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/Lotte@2x.png 2x" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/NH.png" alt="NH Card" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/NH@2x.png 2x" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/Samsung.png" alt="Samsung Card" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/Samsung@2x.png 2x" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/Shinhan.png" alt="Shinhan Card" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/Shinhan@2x.png 2x" />
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/WOORI.png" alt="WOORI" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/WOORI@2x.png 2x" />
                            </div>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" data-name="ChevronRight" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
                    </button>
                    <button className="pay-btn digital-btn" onClick={handleNavigate}>
                        <div className="button-left-row">
                            <p className="button-left-row-text">Digital Wallet</p>
                            <div className="card-img-row-container">
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/KAKAOPAY.png" alt="KakaoPay" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/KAKAOPAY@2x.png 2x" />
                            </div>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" data-name="ChevronRight" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
                    </button>
                    <button className="pay-btn mobile-btn" onClick={handleNavigate}>
                        <div className="button-left-row">
                            <p className="button-left-row-text">Add to mobile bill</p>
                            <div className="card-img-row-container">
                            <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/KT.png" alt="KT" srcset="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/KT@2x.png 2x" />
                            </div>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" data-name="ChevronRight" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>

                    </button>
                </div>
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