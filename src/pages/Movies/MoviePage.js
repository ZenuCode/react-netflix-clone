import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { imageUrl } from "../../services/movieServices";
import "./Moviepage.css";
import Navbar from "../../components/Navbar";

const MoviePage = () => {
    const [movieDetailed, setMovieDetailed] = useState({});
    const [credits, setCredits] = useState({});
    const [poster, setPoster] = useState({});
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const location = useLocation();
    const movie = location.state;
    const {
        id, 
        title, 
        backdrop_path, 
        release_date, 
        overview, 
        vote_average, 
        vote_count,
        runtime
    } = movie.movie;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const detailedResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos&api_key=${process.env.REACT_APP_TMDB_KEY}`);
                const detailedData = await detailedResponse.json();
                setMovieDetailed(detailedData);

                const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                const creditsData = await creditsResponse.json();
                setCredits(creditsData);

                const posterResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                const posterData = await posterResponse.json();
                setPoster(posterData);

                setIsLoading(false); // Update loading state
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // Display loading indicator
    }

    const handleClick = () => {
        console.log(credits);
        console.log(poster);
    }

    return (
        <div className="movie-page-container" style={{ backgroundImage: `url(${imageUrl(backdrop_path, "original")})` }}>
            <Navbar profile={true} />
            <div className="movie-page-bottom">
                <div className="movie-page-left">
                    <p className="movie-page-title">{title}</p>
                    <div className="movie-page-about-container">
                        <p>{vote_average} | {vote_count}</p>
                        <p>{runtime}</p>
                        <p>⋅</p>
                        <p>genre</p>
                    </div>
                    <p className="movie-page-info">{overview}</p>
                    <p>Homepage</p>
                    <button>Play Now</button>
                    <button>Trailer</button>
                    <button onClick={handleClick}>Check</button>
                </div>
                <div className="movie-page-right">
                    <div className="movie-page-poster">
                        <img className="movie-page-poster-img" src={`${imageUrl(poster.posters[0].file_path, "w185")}`} alt="test" />
                    </div>
                    <div className="movie-page-actor">
                        <img src={`${imageUrl(credits.cast[0].profile_path, "w92")}`} alt="test" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage;