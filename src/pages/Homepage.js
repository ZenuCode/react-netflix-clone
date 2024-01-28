import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import HomeInfo from "../components/HomeInfo";
import HomeFAQ from "../components/HomeFAQ";

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
                <HomeInfo
                    id={1}
                    topText={"Enjoy on your TV"}
                    botText={"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."}
                    mediaImg={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"}
                    mediaVideo={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"}
                />
                <hr className="home-line" />
                <HomeInfo
                    id={2}
                    topText={"Watch everywhere"}
                    botText={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."}
                    mediaImg={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"}
                    mediaVideo={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"}
                />
                <hr className="home-line" />
                <HomeInfo
                    id={3}
                    topText={"Create profiles for kids"}
                    botText={"Send kids on adventures with their favorite characters in a space made just for them—free with your membership."}
                    mediaImg={"https://occ-0-988-2219.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"}
                />
                <hr className="home-line" />
                <HomeInfo
                    id={4}
                    topText={"Download your shows to watch offline"}
                    botText={"Watch on a plane, train, or submarine..."}
                    mediaImg={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"}
                />
            </div>



            
            <hr className="home-line" />
            <div className="faq-container">
                <p className="faq-title">Frequently Asked Questions</p>
                <HomeFAQ
                    question="What can I watch on Netflix?"
                    answer="Netflix has an extensive"
                />
                <HomeFAQ
                    question="What is Netflix?"
                    answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
                    answer2="You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
                />
            </div>
            <div className="top-container-text">
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
            <hr className="home-line" />

        </div>
    )
}

export default Homepage;
