import {useReducer} from 'react';
import MoviesReducer from './moviesReducer';
import {GET_TOP_MOVIES, GET_POPULAR_MOVIES, GET_UPCOMING} from '../types';
import MoviesContext from "./moviesContext";
import axios from "axios";

const MoviesState = (props) => {
	const initialState = {
		topMovies: null,
		popularMovies: null,
		upcoming: null,
		loading: false,
		errors: null
	}

	const [state, dispatch] = useReducer(MoviesReducer, initialState);

	//TODO Get Top Movies



	const getPopularMovies = async () => {


		try {
			const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_CLIENT_ID}&language=en-US&page=1`);
			dispatch({type: GET_POPULAR_MOVIES, payload: res.data});
		} catch (err) {
			console.log("error")
		}
	};

	const getUpcoming = async () => {


		try {
			const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIEDB_CLIENT_ID}&language=en-US&page=1`);
			dispatch({type: GET_UPCOMING, payload: res.data});
			console.log(res.data);

		} catch (err) {
			console.log("error")
		}
	};

	return (
		<MoviesContext.Provider value={{
			getPopularMovies,
			getUpcoming,

			popularMovies: state.popularMovies,
			topMovies: state.topMovies,
			upcoming: state.upcoming,
			loading: state.loading,
		}}>
			{props.children}
		</MoviesContext.Provider>
	)

}
export default MoviesState;
