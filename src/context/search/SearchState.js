import {useReducer} from "react";
import SearchContext from "./searchContext";
import searchReducer from "./searchReducer";
import {SET_LOADING, GET_SEARCH_RESULTS, GET_SEARCH_MOVIES, GET_SEARCH_SHOWS} from "../types";
import axios from "axios";


const SearchState = (props) =>{
	const initialState = {
		searchResultsMovies:null,
		searchResultsShows:null,
		loading:false
	}
	const [state, dispatch] = useReducer(searchReducer,initialState);

	//TODO Make Request to API
	const searchRequest = (query) =>{
		getMovies(query);
		getShows(query);

	}
	const getMovies = async (query) =>{
		setLoading();
		try{

			const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_CLIENT_ID}&query=${query}`);
			dispatch({type:GET_SEARCH_MOVIES, payload:res.data});
		}catch(err){
			console.log("error")
		}
	}
	const getShows = async (query) =>{
		setLoading();
		try{
			const res = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_MOVIEDB_CLIENT_ID}&page=1&include_adult=false&query=${query}`);
			dispatch({type:GET_SEARCH_SHOWS, payload:res.data});
		}
		catch(err){
			console.log("error")
		}
	}
	// TODO Set Loading to true
	const setLoading = () =>{
		dispatch({type:SET_LOADING});
	}

	return(
		<SearchContext.Provider value={{searchResultsMovies: state.searchResultsMovies, searchResultsShows:state.searchResultsShows, loading:state.loading,searchRequest}}>
		{props.children}
			</SearchContext.Provider>
	)
}

export default SearchState;
