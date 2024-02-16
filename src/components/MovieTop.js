import React, { useEffect, useState } from "react";
import endpoints, { imageUrl } from "../services/movieServices";
import "../pages/Movies/Home.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const MovieTop = () => {

    const [movie, setMovie] = useState({});
    const { title, backdrop_path, release_date, overview } = movie;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(endpoints.popular)
            .then(res => res.json())
            .then((res) => {
                const movies = res.results;
                const randomMovie = movies[Math.floor(Math.random() * movies.length)]
                setMovie(randomMovie);
            })
    }, []);

    const handleNavigate = () => {
        navigate("/movie-page", { state: { movie: movie }});
    }


    const shrink = (str, length) => {
        if (!str) return "";
        return str.length > length ? str.slice(0, length) + "..." : str;
    }

    if (!movie) {
        return <><p>fetching movie...</p></>
    }

    return (
        <div className="movie-top-container">
            <div className="movie-top-background" style={{ backgroundImage: `url(${imageUrl(backdrop_path, "original")})` }}></div>
            <Navbar profile={true}/>
            <div className="move-top-info">
                <h1 className="movie-top-title">{title}</h1>
                <div className="movie-top-btncontainer">
                    <button className="movie-top-playbtn" onClick={handleNavigate}>Go to Movie</button>
                </div>
                <p className="movie-top-date">{release_date}</p>
                <p className="movie-top-overview">{shrink(overview, 320)}</p>
            </div>
        </div>
    )
}

export default MovieTop;