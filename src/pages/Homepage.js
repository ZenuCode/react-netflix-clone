import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const [email, setEmail] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);
    const emailRef = useRef(null);
    const navigate = useNavigate();

    function handlerFormSubmit(event) {
        event.preventDefault();
        setButtonClicked(true);
        if (emailRef.current.validity.valid) {
            console.log("Form submitted with valid email:", email);
            navigate('/signup'); 
        } else {
            console.log("Invalid email:", email);
        }
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
        setButtonClicked(false);
    }

    return (
        <div className="homepage-container">
            <div className="top-container">
                <Navbar />
                <div className="top-container-text">
                    <p className="top-top-text">Unlimited movies, TV shows, and more</p>
                    <p className="top-mid-text">Watch anywhere. Cancel anytime.</p>
                    <p className="top-bot-text">Ready to watch? Enter your email to create or restart your membership.</p>
                    <form
                        onSubmit={handlerFormSubmit}
                        className="signup-form"
                    >
                        <input
                            className="form-input"
                            ref={emailRef}
                            type="email"
                            placeholder="Email address"
                            autoComplete="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <button className="form-btn" disabled={!emailRef.current?.validity.valid}>Get Started</button>
                        {buttonClicked && !emailRef.current?.validity.valid && <p style={{ color: 'red' }}>Valid email required.</p>}
                    </form>
                </div>
            </div>
            
            <div className="mid-container">
                <div className="mid-element">
                    <div className="mid-text">
                        <p className="mid-top-text">Enjoy on your TV</p>
                        <p className="mid-bot-text">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className="mid-media">
                        <img className="mid-img" alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
                        <video className="mid-video" autoplay="" playsinline muted loop>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
