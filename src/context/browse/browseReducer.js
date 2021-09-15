import {SET_LOADING, SET_ERRORS, GET_POPULAR_MOVIES, GET_POPULAR_SHOWS} from "../types";

export default (state, action) => {
	switch (action.type) {

		case GET_POPULAR_SHOWS:
			return {
				...state,
				popularShows: action.payload,
				loading:false,
			}
		case GET_POPULAR_MOVIES:
			return {
				...state,
				popularMovies:action.payload,
				loading:false,
			}
		case SET_LOADING:
			return {
				...state,
				loading:true,
			}
		default:
			return {
				...state
			}
	}
}