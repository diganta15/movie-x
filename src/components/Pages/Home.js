import React from 'react';
import TopMovies from "../layout/TopMovies";
import Upcoming from "../layout/Upcoming";
import PopularMovies from "../layout/PopularMovies";


const Home = () => {
    return (
        <div className="home">
            <PopularMovies />
            {/* <TopMovies />*/}
            <Upcoming />
        </div>
    );
};

export default Home;
