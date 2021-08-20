import React,{useState, useContext} from 'react';
import SearchContext from "../../context/search/searchContext";
import Loading from "../layout/Loading";


const Search = () => {
    const searchState = useContext(SearchContext);
    const {loading, searchResults, searchRequest} = searchState;
    const onClick = () => {

    }
    return (
        <div className='search-wrapper'>
            <div className="search-bar-wrapper">
                <input type="text" name="query" className="search" placeholder="Search For Movies Or Shows" id=""/>
                <button className="btn btn-search"><i className="fas fa-search"></i></button>
            </div>


            {loading && <Loading />}
        </div>
    );
};

export default Search;
