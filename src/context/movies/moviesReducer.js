import {GET_POPULAR_MOVIES,GET_TOP_MOVIES, GET_UPCOMING} from '../types';

export default (state,action) =>{
    switch (action.type){

        case GET_UPCOMING:
            console.log(action.payload);
            return {
                ...state,
                upcoming: action.payload,
            }
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies:action.payload,
                loading:false,
            }

        default:
            return state;
    }
}