import { useEffect, useState } from "react";
import './App.css';
import searchIcon from './search.svg';
import Moviecard from './Moviecard';
//c46d5a70
const API_URL= 'https://www.omdbapi.com/?apikey=c46d5a70';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(''+API_URL+'&s='+title);
    console.log(response);
    const data = await response.json();
    
    setMovies(data.Search);
  };

  useEffect(()=>{
    searchMovies('Spiderman');
  },[]);

  return ( 
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">

        <input 
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) =>setSearchTerm(e.target.value)}
          />

        <img 
        src={searchIcon}
        alt="search"
        onClick={() =>searchMovies(searchTerm) }

        />
      </div> 

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((mov) => (
            <Moviecard movie={mov} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
     

    </div>
  );
}

export default App;
