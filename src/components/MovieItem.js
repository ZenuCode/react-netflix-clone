import React, { useState } from "react";
import { imageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { db } from "../services/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { UserAuth } from "../context/AuthContext";

const MovieItem = ({ movie }) => {
    const [like, setLike] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { user } = UserAuth();
    
    const { title, backdrop_path, poster_path } = movie;

    const markFavShow = async () => {
        const userEmail = user?.email;

        if (userEmail) {
            const userDoc = doc(db, 'users', userEmail);
            setLike(!like)
            await updateDoc(userDoc, {
                favShows: arrayUnion({ ...movie }),
            })
        } else {
            alert("Login to save a movie");
        }
    }

    const handleNavigate = () => {
        
    }

    return (
        <div
            className="movie-item-container"
            style={{ backgroundImage: `url(${imageUrl(backdrop_path, "w500")})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleNavigate}
        >
            {isHovered &&
                (<div className="movie-item-info">
                    <p onClick={markFavShow} className="movie-item-heart-container">
                        {like ? <FaHeart className="movie-item-heart" size={20} /> : <FaRegHeart className="movie-item-heart" size={20} />}
                    </p>
                    <p className="movie-item-title">{movie.title}</p>
                </div>)}
        </div>
    )
}

export default MovieItem;