import React from "react";
import Hero from "../components/Hero";
import endpoints from "../services/movieServices";
import MovieRow from "../components/MovieRow";

const Home = () => {
    return (
        <>
            <Hero />
            <MovieRow title='upcoming' url={endpoints.upcoming}/>
            <MovieRow title='trending' url={endpoints.trending}/>
            <MovieRow title='topRated' url={endpoints.topRated}/>
            <MovieRow title='comedy' url={endpoints.comedy}/>
            <MovieRow title='popular' url={endpoints.popular}/>
        </>
    )
}

export default Home;