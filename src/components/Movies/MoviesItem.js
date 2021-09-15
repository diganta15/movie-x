import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const MoviesItem = ({movie}) => {
    const [className, setClassName] = useState('no-display')

    return (

          <Link to={`/movies/${movie.id}`}>
              <div className="movie-item-wrapper cursor" >
                  <div className="movie-item" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie.poster_path}')`}}
                       onMouseEnter={()=>setClassName('hover-text')}
                       onMouseLeave={()=>setClassName('no-display')}
                  >
                      <p className={className}>
                          <span className="inner-text">{movie.overview.length<=300 ? movie.overview:`${movie.overview.substring(0,300)} ......`}</span>
                      </p>

                  </div>
                  <p className="movie-name">{movie.title}</p>
              </div>
          </Link>


    );
};



export default MoviesItem;
