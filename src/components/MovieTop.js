import React, { useEffect, useState } from "react";
import endpoints, { imageUrl } from "../services/movieServices";
import "../pages/Movies/Home.css";
import Navbar from "./Navbar";

const MovieTop = () => {

    const [movie, setMovie] = useState({});
    const { title, backdrop_path, release_date, overview } = movie;

    useEffect(() => {
        fetch(endpoints.popular)
            .then(res => res.json())
            .then((res) => {
                const movies = res.results;
                const randomMovie = movies[Math.floor(Math.random() * movies.length)]
                setMovie(randomMovie);
            })
    }, []);


    const shrink = (str, length) => {
        if (!str) return "";
        return str.length > length ? str.slice(0, length) + "..." : str;
    }

    if (!movie) {
        return <><p>fetching movie...</p></>
    }

    return (
        <div className="movie-top-container" style={{ backgroundImage: `url(${imageUrl(backdrop_path, "original")})` }}>
            <Navbar profile={true}/>
            <div className="move-top-info">
                <h1 className="movie-top-title">{title}</h1>
                <div className="movie-top-btncontainer">
                    <button className="movie-top-playbtn">Play</button>
                    <button className="movie-top-savebtn">Watch Later</button>
                </div>
                <p className="movie-top-date">{release_date}</p>
                <p className="movie-top-overview">{shrink(overview, 320)}</p>
            </div>
        </div>
    )
}

export default MovieTop;