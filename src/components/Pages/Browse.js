import React,{useContext, useEffect} from 'react';
import BrowseContext from "../../context/browse/browseContext";
import Shows from "../shows/Shows";
import Movies from "../Movies/Movies";
import Loading from "../layout/Loading";
const Browse = () => {
    const browseContext = useContext(BrowseContext);
    const {popularShows, popularMovies, loading, getPopularShows, getPopularMovies} = browseContext;
    //TODO Make request for shows and movies
    useEffect(()=>{
       getPopularShows();
       getPopularMovies();
    },[])
    return (
        <div className='browse'>
            {/*TODO Add loading stuff*/}
            {loading !==true && popularMovies!==null && popularShows!==null?(
                <div>
                    <h1 className="browse-title">Popular Shows</h1>
                    <Shows shows={popularShows.results} />
                    <h1 className="browse-title">Popular Movies</h1>
                    <Movies movies={popularMovies.results} />
                </div>
            ):null }

        </div>
    );
};

export default Browse;
