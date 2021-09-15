import React, {useEffect, useContext} from 'react';
import TopMovies from "../layout/TopMovies";
import Upcoming from "../layout/Upcoming";
import PopularMovies from "../layout/PopularMovies";
import MoviesContext from "../../context/movies/moviesContext";
import Loading from "../layout/Loading";


const Home = () => {
    const moviesContext = useContext(MoviesContext);

    const {getPopularMovies,getUpcoming,getTopMovies,popularMovies,upcoming, loading} = moviesContext;
    useEffect(()=>{

       getPopularMovies();
       getUpcoming();
    },[])
    return (
        <div className="home">
            {loading !==true && popularMovies !==null && upcoming!==null? (<div>
                <div>
                    <PopularMovies />
                    <Upcoming />
                </div>
            </div>):(<Loading />) }
        </div>
    );
};

export default Home;
