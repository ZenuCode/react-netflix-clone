import react from "react";
import Navbar from "../components/Navbar";

const Homepage = () => {
    

    return (
        <div className="homepage-container">
            <Navbar />
            <div className="top-image-container">
                <p className="top-text">Unlimited movies, TV shows, and more</p>
                <p className="mid-text">Watch anywhere. Cancel anytime.</p>
                <p className="bot-text">Ready to watch? Enter your email to create or restart your membership.</p>
                <form>
                    Email address
                    <button>Get Started</button>
                </form>
            </div>
        </div>
    )
}

export default Homepage;