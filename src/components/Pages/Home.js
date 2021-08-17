import React from 'react';
import TopMovies from "../layout/TopMovies";
import Upcoming from "../layout/Upcoming";
import PopularMovies from "../layout/PopularMovies";


const Home = () => {
    return (
        <div>
            <PopularMovies />
            {/* <TopMovies />*/}
            <Upcoming />
        </div>
    );
};

export default Home;
