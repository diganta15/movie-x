import React,{useContext} from 'react';
import MoviesContext from '../../context/movies/moviesContext'
import Movies from  '../Movies/Movies'

const TopMovies = () => {
    const moviesContext = useContext(MoviesContext);
    return (
        <div className="top-movies">
            <h1 className="section-title">Top Movies</h1>
            <Movies movies={moviesContext.topMovies.results} />
        </div>
    );
};

export default TopMovies;
