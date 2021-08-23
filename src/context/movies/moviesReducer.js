import {GET_POPULAR_MOVIES, GET_TOP_MOVIES, GET_UPCOMING, SET_ERRORS, SET_LOADING} from '../types';

export default (state,action) =>{
    switch (action.type){

        case GET_UPCOMING:

            return {
                ...state,
                upcoming: action.payload,
                loading:false
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
                loading:true
            }
        case SET_ERRORS:
            return {
                ...state,
                errors:action.payload,
            }

        default:
            return state;
    }
}