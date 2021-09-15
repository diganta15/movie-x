import React, {useContext} from 'react';
import MoviesContext from '../../context/movies/moviesContext';
import Movies from "../Movies/Movies";

const Upcoming = () => {
    const moviesContext = useContext(MoviesContext);
    return (
        <div className="upcoming">
        <h1 className="section-title">Upcoming</h1>
            <Movies movies={moviesContext.upcoming.results} />
        </div>
    );
};

export default Upcoming;
