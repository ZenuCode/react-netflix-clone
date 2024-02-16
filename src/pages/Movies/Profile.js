import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../services/firebase";
import { doc, onSnapshot } from "firebase/firestore"
import "./Profile.css";
import { imageUrl } from "../../services/movieServices";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
    const [movies, setMovies] = useState([]);
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
            if (doc.data()) {
                setMovies(doc.data().favShows)
            }
        })
        console.log(movies);
    }, [user?.email, movies]);

    if (!user) {
        return <><p>fetching shows...</p></>
    }

    const handleClick = (movie) => {
        navigate("/movie-page", { state: { movie: movie }});
    }

const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="profile-container">
            <div className="nav-container">
                <Link to='/home'>
                    <img className="nav-logo" src="/assets/fakelogo.png" alt="logo" />
                </Link>
                <div className="nav-left">
                        <p className="profile-email-display">{user.email}</p>
                        <button onClick={handleLogout} className="nav-signinout-btn">
                            Sign Out
                        </button>
                    </div>
            </div>
            <div>
                <div className="profile-info">
                    <h1 className="profile-title">My Shows</h1>
                    <div className="profile-img-container">
                        { movies.map((movie) => (
                            <img 
                                src={`${imageUrl(movie.backdrop_path, "w500")}`} 
                                alt="img"
                                className="profile-img"
                                onClick={() => handleClick(movie)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;