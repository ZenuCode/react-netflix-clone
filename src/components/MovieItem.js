import React, {useState} from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { db } from "../services/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { UserAuth } from "../context/AuthContext";

const MovieItem = ({movie}) => {
    const [like, setLike] = useState(false);
    const {user} = UserAuth();
    const {title, backdrop_path, poster_path} = movie;
    const markFavShow = async() => {
        const userEmail = user?.email;

        if (userEmail) {
            const userDoc = doc(db, 'users', userEmail);
            setLike(!like)
            await updateDoc(userDoc, {
                favShows: arrayUnion({...movie}),
            })
        } else {
            alert("Login to save a movie");
        }
    }

    return (
        <div className="movie-list-container">
            <img 
                className="listMovieImage"
                src={createImageUrl(backdrop_path ?? poster_path, "w500")} 
                alt={title} 
            />

            <div className="onListMovieHover">
                <p>{movie.title}</p>
                <p onClick={markFavShow} className="cursor-pointer">
                    {like ? <FaHeart size={20} /> : <FaRegHeart size={20}/>}
                </p>
            </div>
        </div>
    )
}

export default MovieItem;