import React from 'react';
import noImage from '../../noImage.jpg'

const ShowItems = ({show}) => {
    return (
        <div className="show-item-wrapper cursor">
            <div className="show-item" style={show.backdrop_path !== null ?({backgroundImage:`url('https://image.tmdb.org/t/p/original/${show.backdrop_path}')`}):({backgroundImage:`url('${noImage}')`})}></div>
         <p className="show-name">{show.name}</p>

        </div>

    );
};

export default ShowItems;
