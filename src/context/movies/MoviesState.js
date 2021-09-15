import {useReducer} from 'react';
import MoviesReducer from './moviesReducer';
import {GET_TOP_MOVIES, GET_POPULAR_MOVIES, GET_UPCOMING, SET_ERRORS, SET_LOADING} from '../types';
import MoviesContext from "./moviesContext";
import axios from "axios";
import functions from "../../firebase";

// const api = functions.config().api_key.key;
// console.log(api);

const REACT_APP_MOVIEDB_CLIENT_ID= '1110f193b789d3675a2ba137ac0b6b96';

const MoviesState = (props) => {
	const initialState = {
		topMovies: null,
		popularMovies: null,
		upcoming: null,
		loading: false,
		errors: null
	}

	const [state, dispatch] = useReducer(MoviesReducer, initialState);


	const getPopularMovies = async () => {

		setLoading();
		try {
			const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_MOVIEDB_CLIENT_ID}&language=en-US&page=1`);
			dispatch({type: GET_POPULAR_MOVIES, payload: res.data});
		} catch (err) {
			dispatch({type:SET_ERRORS, payload:err.response});
		}
	};

	const getUpcoming = async () => {
		setLoading();

		try {
			const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${REACT_APP_MOVIEDB_CLIENT_ID}&language=en-US&page=1`);
			dispatch({type: GET_UPCOMING, payload: res.data});


		} catch (err) {
			dispatch({type:SET_ERRORS, payload:err.response});
		}
	};

	const setLoading = () => {
		dispatch({type:SET_LOADING})
	}

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
