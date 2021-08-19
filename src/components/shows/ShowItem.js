import React from 'react';

const ShowItems = ({show}) => {
    return (
        <div className="show-item-wrapper cursor">
            <div className="show-item" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${show.backdrop_path}')`}}></div>
         <p className="show-name">{show.name}</p>

        </div>

    );
};

export default ShowItems;
