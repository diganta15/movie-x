import {GET_SEARCH_RESULTS, SET_LOADING} from "../types";

export default (state,action) =>{
	switch (action.type){
		case SET_LOADING:
			return {
				...state,
				loading:true,
			}
		default:
			return state;
	}
}