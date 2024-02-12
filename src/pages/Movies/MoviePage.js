import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { imageUrl } from "../../services/movieServices";
import "./Moviepage.css";
import Navbar from "../../components/Navbar";

const MoviePage = () => {
    const location = useLocation();
    const movie = location.state;
    const { id, title, backdrop_path, release_date, overview, vote_average, vote_count } = movie.movie;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos&api_key=${process.env.REACT_APP_TMDB_KEY}`)
            .then(res => res.json())
            .then(res => console.log(res))
    }, []);

    return (
        <div className="movie-page-container" style={{ backgroundImage: `url(${imageUrl(backdrop_path, "original")})` }}>
            <Navbar profile={true}/>
            <div className="movie-page-bottom">
                <div className="movie-page-left">
                    <p className="movie-page-title">{title}</p>
                    <div className="movie-page-about-container">
                        <p>{vote_average} | {vote_count}</p>
                        <p>Runtime</p>
                    </div>
                    <p className="movie-page-info">{overview}</p>
                    <p>Homepage</p>
                    <button>Play Now</button>
                    <button>Trailer</button>
                </div>
                <div className="movie-page-right">
                    <div className="movie-page-poster">
                        <img src="" alt=""/>
                    </div>
                    <div className="movie-page-actor">
                        <img src="" alt=" " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage;