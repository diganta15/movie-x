import React, {useEffect, useContext} from 'react';
import TopMovies from "../layout/TopMovies";
import Upcoming from "../layout/Upcoming";
import PopularMovies from "../layout/PopularMovies";
import MoviesContext from "../../context/movies/moviesContext";


const Home = () => {
    const moviesContext = useContext(MoviesContext);

    const {getPopularMovies,getUpcoming,getTopMovies,popularMovies,upcoming, loading} = moviesContext;
    useEffect(()=>{

       getPopularMovies();
       getUpcoming();
    },[])
    return (
        <div className="home">
            {popularMovies && <PopularMovies />}
            {upcoming && <Upcoming />}
        </div>
    );
};

export default Home;
