import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/layout/NavBar';
import Home from "./components/Pages/Home";
import MoviesState from './context/movies/MoviesState';
import BrowseState from "./context/browse/BrowseState";
import SearchState from "./context/search/SearchState"
import Browse from "./components/Pages/Browse";
import Search from "./components/Pages/Search";
import MoviesDetails from "./components/InnerPages/MoviesDetails";
import ShowsDetails from "./components/InnerPages/ShowsDetails";

function App() {
    return (
        <MoviesState>
        <BrowseState>
       <SearchState>
           <Router>
               <div className="App">
                   <NavBar/>
                   <Switch>
                       <Route exact path='/' component={Home}/>
                       <Route exact path='/browse' component={Browse}/>
                       <Route exact path ='/search' component={Search} />
                       <Route exact path ='/movies/:id' component={MoviesDetails} />
                       <Route exact path ='/shows/:id' component ={ShowsDetails} />
                   </Switch>
               </div>
           </Router>
       </SearchState>
        </BrowseState>
        </MoviesState>
    );
}

export default App;
