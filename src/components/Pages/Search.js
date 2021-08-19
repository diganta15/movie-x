import React,{useState} from 'react';
import Loading from "../layout/Loading";

const Search = () => {
    return (
        <div className='search-wrapper'>
            <div className="search-bar-wrapper">
                <input type="text" name="query" className="search" placeholder="Search For Movies Or Shows" id=""/>
                <button className="btn btn-search"><i className="fas fa-search"></i></button>
            </div>


            <Loading />
        </div>
    );
};

export default Search;
