import React,{useState,useEffect, useContext, Fragment} from 'react';
import SearchContext from "../../context/search/searchContext";
import Loading from "../layout/Loading";
import Movies from "../Movies/Movies";
import Shows from "../shows/Shows";
import {queries} from "@testing-library/react";



const Search = () => {
    const searchState = useContext(SearchContext);
    const {loading, searchResultsMovies,searchResultsShows, searchRequest} = searchState;
    const [query, setQuery] = useState('');

    const onClick = async (e) => {
        e.preventDefault();
        await searchRequest(query);



    }
    return (
        <div className='search-wrapper'>
            <div className="search-bar-wrapper">
                <input type="text" name="query" value={query} className="search" placeholder="Search For Movies Or Shows" id=""
                onChange={(e)=>setQuery(e.target.value)}
                />
                <button className="btn btn-search" onClick={onClick}><i className="fas fa-search"></i></button>
            </div>


            {loading!==true && searchResultsShows!==null  && searchResultsMovies!== null?(
               <div className="results">

                       <Fragment>
                           <h1 className="search-title">Movies</h1>
                           <Movies movies={searchResultsMovies.results} />
                           <h1 className="search-title">TV Shows</h1>
                           <Shows shows={searchResultsShows.results} />
                       </Fragment>

               </div>

            ):<Loading />}
        </div>
    );
};

export default Search;
