import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../services/movieServices";

const Hero = () => {

    const [movie, setMovie] = useState({});

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

    const { title, backdrop_path, release_date, overview } = movie;


    return (
        <div className="movie-info">
            <div>
                <div/>
                <img 
                    className="img-info"
                    src={createImageUrl(backdrop_path, "original")}
                    alt={title}
                />

                <div>
                    <h1>{title}</h1>
                    <div>
                        <button>play</button>
                        <button>watch later</button>
                    </div>
                    <p>{release_date}</p>
                    <p>{shrink(overview, 165)}</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;