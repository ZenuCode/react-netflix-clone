import React, {useEffect, useState} from "react";
import MovieItem from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const MovieRow = ({title, url}) => {
    const rowId = Math.floor(Math.random() * 1000);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setMovies(res.results))
    }, [url]);

    const slide = (offset) => {
        const slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + offset;
    }

    return (
        <>
            <h2>{title}</h2>

            <div className="movie-lists">
                <MdChevronLeft 
                    onClick={() => slide(-500)}
                    className="bg-white rounded-full group-hover:block text-gray-700" 
                    size={40}
                />
                <div className="scroll-bar" id={`slider` + rowId}>
                    {movies.map((movie) => (
                        <h1><MovieItem key={movie.id} movie={movie} /></h1>
                    ))}
                </div>
                <MdChevronRight />
            </div>
        </>
    )
}

export default MovieRow;