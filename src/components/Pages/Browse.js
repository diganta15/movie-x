import React,{useContext} from 'react';
import BrowseContext from "../../context/browse/browseContext";

const Browse = () => {
    const browseContext = useContext(BrowseContext);
    const {popularShows} = browseContext;
    return (
        <div className='browse'>
            <h1>Browse</h1>

        </div>
    );
};

export default Browse;
