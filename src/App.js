import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/layout/NavBar';
import Home from "./components/Pages/Home";
import MoviesState from './context/movies/MoviesState';
import Browse from "./components/Pages/Browse";
import Search from "./components/Pages/Search"

function App() {
    return (
        <MoviesState>
            <Router>
                <div className="App">
                    <NavBar/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/browse' component={Browse}/>
                        <Route exact path ='/search/:term' component={<Search></Search>} />
                    </Switch>
                </div>
            </Router>

        </MoviesState>
    );
}

export default App;
