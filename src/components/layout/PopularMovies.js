import React, {useContext} from 'react';
import MoviesContext from '../../context/movies/moviesContext';
import Movies from '../Movies/Movies'

const PopularMovies = () => {
    const moviesContext = useContext(MoviesContext);

    return (
        <div className="popular-movies">
        <h1 className="section-title">Popular Movies</h1>
            <Movies movies={moviesContext.popularMovies.results} />
        </div>
    );
};

export default PopularMovies;
