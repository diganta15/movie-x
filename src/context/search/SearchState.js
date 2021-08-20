import {useReducer} from "react";
import SearchContext from "./searchContext";
import searchReducer from "./searchReducer";
import {SET_LOADING} from "../types";


const SearchState = (props) =>{
	const initialState = {
		searchResults:null,
		loading:false
	}
	const [state, dispatch] = useReducer(searchReducer,initialState);

	//TODO Make Request to API
	const searchRequest = () =>{
		setLoading();

		console.log("Made Req")
	}
	// TODO Set Loading to true
	const setLoading = () =>{
		dispatch({type:SET_LOADING});
	}

	return(
		<SearchContext.Provider value={{searchResults: state.searchResults, loading:state.loading,searchRequest}}>
		{props.children}
			</SearchContext.Provider>
	)
}

export default SearchState;
