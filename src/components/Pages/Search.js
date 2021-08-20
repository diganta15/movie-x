import React,{useState, useContext} from 'react';
import SearchContext from "../../context/search/searchContext";
import Loading from "../layout/Loading";
import Movies from "../Movies/Movies";
import Shows from "../shows/Shows";



const Search = () => {
    const searchState = useContext(SearchContext);
    const {loading, searchResultsMovies,searchResultsShows, searchRequest} = searchState;
    const newMoviesResults = searchResultsMovies.results.slice(0,10);
    const newShowsResults = searchResultsShows.results.slice(0,10);

    const onClick = () => {

    }
    return (
        <div className='search-wrapper'>
            <div className="search-bar-wrapper">
                <input type="text" name="query" className="search" placeholder="Search For Movies Or Shows" id=""/>
                <button className="btn btn-search"><i className="fas fa-search"></i></button>
            </div>


            {loading? <Loading />:(
               <div className="results">
                   <h1 className="search-title">Movies</h1>
                   <Movies movies={newMoviesResults} />
                   <h1 className="search-title">TV Shows</h1>
                    <Shows shows={newShowsResults} />
               </div>

            )}
        </div>
    );
};

export default Search;
