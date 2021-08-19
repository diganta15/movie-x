import React,{useState} from 'react';

const Search = () => {
    return (
        <div className='search-wrapper'>
            <input type="text" name="query" className="search" placeholder="Search For Movies Or Shows" id=""/>
            <button className="btn btn-search"><i className="fas fa-search"></i></button>


        </div>
    );
};

export default Search;
