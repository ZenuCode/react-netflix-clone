import React, { useEffect, useState } from "react";
import { imageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { db } from "../services/firebase";
import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore"
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ movie }) => {
    const [like, setLike] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { user } = UserAuth();
    const navigate = useNavigate();
    
    const { backdrop_path } = movie;

    useEffect(() => {
        const fetchLikedMovies = async () => {
            try {
                const userDoc = doc(db, 'users', user.email);
                const userSnapshot = await getDoc(userDoc);
                if (userSnapshot.exists()) {
                    const userData = userSnapshot.data();
                    if (userData.favShows && userData.favShows.some(item => item.id === movie.id)) {
                        setLike(true);
                    }
                }
            } catch (error) {
                console.error("Error fetching fav movies:", error);
            }
        };

        fetchLikedMovies();
    }, [movie, user]);

    const markFavShow = async (e) => {
        e.stopPropagation();
        
        const userDoc = doc(db, 'users', user.email);
        if (like) {
            await updateDoc(userDoc, {
                favShows: arrayRemove({ ...movie }),
            });
        } else {
            await updateDoc(userDoc, {
                favShows: arrayUnion({ ...movie }),
            });
        }
        setLike(!like);
    };

    const handleNavigate = () => {
        navigate("/movie-page", { state: { movie: movie }});
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
                    <p onClick={(e) => markFavShow(e)} className="movie-item-heart-container">
                        {like ? <FaHeart className="movie-item-heart" size={20} /> : <FaRegHeart className="movie-item-heart" size={20} />}
                    </p>
                    <p className="movie-item-title">{movie.title}</p>
                </div>)}
        </div>
    )
}

export default MovieItem;