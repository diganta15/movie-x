import {useReducer} from "react";
import BrowseContext from "./browseContext";
import browseReducer from "./browseReducer";
import axios from "axios";
import {GET_POPULAR_MOVIES, GET_POPULAR_SHOWS, SET_ERRORS, SET_LOADING} from "../types";


const BrowseState = (props) =>{
    const initialState = {
        popularShows:null,
        errors:null,
        onTheAir:null,
        topMovies:null,
        popularMovies: null,
        loading:false
    }

    const [state, dispatch] = useReducer(browseReducer, initialState);
    //TODO Get Popular Shows
    //Get Popular Shows
    const getPopularShows = async () => {
        setLoading();
        try{
            const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIEDB_CLIENT_ID}&language=en-US&page=1`);
            dispatch({type:GET_POPULAR_SHOWS, payload:res.data});

        }catch (err){
            console.log('Error')
        }
    }
    //Get Movies
    const getPopularMovies = async () => {

        setLoading();
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_CLIENT_ID}&language=en-US&page=1`);
            dispatch({type: GET_POPULAR_MOVIES, payload: res.data});
        } catch (err) {
            dispatch({type:SET_ERRORS, payload:err.response});
        }
    };

    const setLoading = () => {
        dispatch({type:SET_LOADING})
    }

    return(
        <BrowseContext.Provider value={{popularShows:state.popularShows,popularMovies:state.popularMovies,loading:state.loading, getPopularShows, getPopularMovies}} >
            {props.children}
        </BrowseContext.Provider>
    )
}
export default BrowseState;