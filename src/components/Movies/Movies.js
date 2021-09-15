import React,{Fragment} from 'react';
import MoviesItem from "./MoviesItem";

const Movies = ({movies}) => {
    return (
        <div className="movies grid grid-6 movie-wrapper">
            {movies.map(movie => <MoviesItem key={movie.id} movie={movie} />)}
        </div>
    );
};

export default Movies;
