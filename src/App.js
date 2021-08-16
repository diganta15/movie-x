import './App.css';
import NavBar from './components/layout/NavBar';
import Home from "./components/Pages/Home";
import MoviesState from './context/movies/MoviesState';

function App() {
  return (
  <MoviesState>
      <div className="App">
          <NavBar />
            <Home />
      </div>
  </MoviesState>
  );
}

export default App;
