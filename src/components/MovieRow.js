import React, {useEffect, useState} from "react";
import MovieItem from "./MovieItem";

const MovieRow = ({title, url}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setMovies(res.results))
    }, [url]);

    console.log(movies)

    return (
        <>
            <h2>{title}</h2>

            <div className="movie-lists">
                <div className="scroll-bar">
                    {movies.map((movie) => (
                        <h1><MovieItem key={movie.id} movie={movie} /></h1>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MovieRow;