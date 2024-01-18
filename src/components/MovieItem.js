import React, {useState} from "react";
import { createImageUrl } from "../services/movieServices";
// import { FaHeart, FaRegHeart } from "react-icons/fa"

const MovieItem = ({movie}) => {
    //const [like, setLike] = useState(false);
    const {title, backdrop_path, poster_path} = movie;

    return (
        <div className="movie-list-container">
            <img 
                className="listMovieImage"
                src={createImageUrl(backdrop_path ?? poster_path, "w500")} 
                alt={title} 
            />

            <div class="onListMovieHover">
                <p>{movie.title}</p>
                {/* <p>{like ? <FaHeart size={20} /> : <FaRegHeart size={20}/>}</p> */}
            </div>
        </div>
    )
}

export default MovieItem;