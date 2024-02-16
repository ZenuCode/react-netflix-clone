import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { imageUrl } from "../../services/movieServices";
import "./Moviepage.css";
import Navbar from "../../components/Navbar";
import PageMap from "../../components/PageMap";
import YouTube from "react-youtube";

const MoviePage = () => {
    const [movie, setMovie] = useState({});
    const [credits, setCredits] = useState({});
    const [poster, setPoster] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showVideo, setShowVideo] = useState(false);
    
    const location = useLocation();
    const movieId = location.state;
    const { id } = movieId.movie;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const detailedResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos&api_key=${process.env.REACT_APP_TMDB_KEY}`);
                const detailedData = await detailedResponse.json();
                setMovie(detailedData);

                const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                const creditsData = await creditsResponse.json();
                setCredits(creditsData.cast.slice(0, 8));

                const posterResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`);
                const posterData = await posterResponse.json();
                setPoster(posterData.posters.slice(0, 8));

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>; // Display loading indicator
    }

    const handleAlert = () => {
        alert("One day we might have a movie.")
    }

    const handleClick = () => {
        console.log(movie.videos.results[0].key);
        setShowVideo(true);
      };
    
      const handleClose = () => {
        setShowVideo(false);
      };

    return (
        <div className="movie-page-container">
            <div className="movie-page-background" style={{ backgroundImage: `url(${imageUrl(movie.backdrop_path, "original")})`, filter: "brightness(50%)" }}></div>
            <Navbar profile={true} />
            <div className="movie-page-bottom">
                <div className="movie-page-left">
                    <p className="movie-page-title">{movie.title}</p>
                    <div className="movie-page-about-container">
                        <p className="movie-page-rating">⭐ {movie.vote_average} | {movie.vote_count}</p>
                        <p>{movie.runtime} min</p>
                        <p className="movie-page-about-divider">⋅</p>
                        {movie.genres.map((genre) => (
                            <p>{genre.name}</p>
                        ))}
                        <p className="movie-page-about-divider">⋅</p>
                        <p>{movie.release_date.slice(0, 4)}</p>
                    </div>
                    <p className="movie-page-info">{movie.overview}</p>
                    {movie.homepage && ( <div className="movie-page-homepage">
                        <p>Homepage</p>
                        <p>:</p>
                        <a 
                            href={`${movie.homepage}`}
                            style={{ color: 'white' }}
                        >{movie.homepage}</a>
                    </div> )}
                    <button className="movie-page-btn movie-page-play" onClick={handleAlert}>Play Now</button>
                    <button className="movie-page-btn movie-page-trailer" onClick={handleClick}>
                        Trailer
                    </button>
                    {showVideo && (
                        <div className="video-overlay">
                            <div className="video-wrapper">
                                <button className="close-button" onClick={handleClose}>X</button>
                                <div className="youtube-player">
                                    <YouTube videoId={`${movie.videos.results[1].key}`} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="movie-page-right">
                    <p className="movie-page-right-text">Posters</p>
                    <div className="movie-page-poster">
                        {poster.map((eachPoster) => (
                            <PageMap 
                                key={eachPoster.id}
                                data={eachPoster} 
                                passClass={"movie-page-poster-img"} 
                                pathUrl={eachPoster.file_path} 
                                width={"w185"}
                            />
                        ))}
                    </div>
                    <p className="movie-page-right-text">Cast</p>
                    <div className="movie-page-actor">
                        {credits.map((eachCredit) => (
                            <PageMap 
                                key={eachCredit.id}
                                data={eachCredit} 
                                passClass={"movie-page-poster-img"} 
                                pathUrl={eachCredit.profile_path} 
                                castName={eachCredit.name}
                                width={"w185"}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* {showVideo && (
                <div className="video-overlay">
                    <div className="video-wrapper">
                        <button className="close-button" onClick={handleClose}>Close</button>
                        <iframe
                            title="Movie Trailer"
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default MoviePage;