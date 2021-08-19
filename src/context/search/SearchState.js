import {useReducer} from "react";
import SearchContext from "./searchContext";
import searchReducer from "./searchReducer";

const SearchState = (props) =>{
	const initialState = {
		searchResults:null,
		loading:false
	}
	const [state, dispatch] = useReducer(searchReducer,initialState);

	//TODO Make Request to API

	// TODO Set Loading to true
}