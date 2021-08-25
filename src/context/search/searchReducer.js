import {GET_SEARCH_MOVIES,GET_SEARCH_SHOWS, SET_LOADING} from "../types";

export default (state,action) =>{
	switch (action.type){
		case GET_SEARCH_SHOWS:
			return {
				...state,
				searchResultsShows: {
					...action.payload,
					results:action.payload.results.slice(0,10)
				},
				loading:false,
			}
		case GET_SEARCH_MOVIES:
			return {
				...state,
				searchResultsMovies: {
					...action.payload,
					results:action.payload.results.slice(0,10)
				},
				loading:false
			}
		case SET_LOADING:
			return {
				...state,
				loading:true,
			}
		default:
			return state;
	}
}