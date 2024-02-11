import React from "react";
import MovieTop from "../../components/MovieTop";
import endpoints from "../../services/movieServices";
import MovieRow from "../../components/MovieRow";

const Home = () => {
    return (
        <div>
            <MovieTop />
            <MovieRow title='upcoming' url={endpoints.upcoming}/>
            <MovieRow title='trending' url={endpoints.trending}/>
            <MovieRow title='topRated' url={endpoints.topRated}/>
            <MovieRow title='comedy' url={endpoints.comedy}/>
            <MovieRow title='popular' url={endpoints.popular}/>
        </div>
    )
}

export default Home;