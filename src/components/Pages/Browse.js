import React,{useContext} from 'react';
import BrowseContext from "../../context/browse/browseContext";
import Shows from "../shows/Shows";
import Movies from "../Movies/Movies";
const Browse = () => {
    const browseContext = useContext(BrowseContext);
    const {popularShows, popularMovies} = browseContext;
    return (
        <div className='browse'>
         <h1 className="browse-title">Popular Shows</h1>
            <Shows shows={popularShows.results} />
            <h1 className="browse-title">Popular Movies</h1>
            <Movies movies={popularMovies.results} />
        </div>
    );
};

export default Browse;
