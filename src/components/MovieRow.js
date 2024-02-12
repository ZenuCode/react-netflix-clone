import React, {useEffect, useState} from "react";
import MovieItem from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const MovieRow = ({title, url}) => {
    const [movies, setMovies] = useState([]);
    const rowId = Math.floor(Math.random() * 1000);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setMovies(res.results))
    }, [url]);

    const slide = (offset) => {
        const slider = document.getElementById(`slider-${rowId}`)
        slider.scrollLeft = slider.scrollLeft + offset;
    }

    return (
        <div className="movie-row-container">
            <h2 className="movie-row-title">{title}</h2>
            <div className="movie-row-list" id={`slider-${rowId}`}>
                <button 
                    onClick={() => slide(-500)}
                    className="movie-row-mdchev-left" 
                >
                    <MdChevronLeft />
                </button>
                <div className="movie-row-scroll" id="slider">
                    {movies.map((movie) => (
                        (movie.backdrop_path ?
                            <h1><MovieItem key={movie.id} movie={movie} /></h1> 
                            : "")
                    ))}
                </div>
                <button 
                    onClick={() => slide(500)}
                    className="movie-row-mdchev-right" 
                >
                    <MdChevronRight  />
                </button>
            </div>
        </div>
    )
}

export default MovieRow;