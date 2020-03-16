import React, {useState} from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState(
    [
      {
        name: "The Matrix",
        year: 1999
      },
      {
        name: "Harry Potter",
        year: 2001
      },
      {
        name: "Toy Story",
        year: 1995
      }
    ]
  );

  const [filteredMovies, setFiltered] = useState([""])
  
  const changeMovie = () => {
    const newState = [...movies]; // ... = spread operatory, it copies the array
    
    newState[1].name = "Gladiator";
    newState[1].year = "1999";

    setMovies(newState);
  }

  const searchMovies = (e) => { // common to use "e" short for event
    // console.log(e.target.value);
    
    const getState = [...movies]
     
    // const moviesList = getState.toLowerCase()
    // console.log(moviesList);
    
    const myFilter = getState.filter((movie) => {
      let film = movie.name.toLowerCase();
      let input = e.target.value.toLowerCase()
      return film.indexOf(input) >= 0
    });

    // myfilter = ['cat', 'camel']
    console.log(myFilter);
    setFiltered(myFilter);
    
    // console.log(animal.indexOf(e.target.value));
  }

  return (
    <div className="container">
      <h1>Search for Movies</h1>
      <input type="text" onChange={searchMovies}/>
      <h2>Movies</h2>
      {/* {movies.map( (movie) => {
        return <h3>{movie.name} was released on {movie.year}</h3>
      } )} */}
      {/* <button onClick={changeMovie}>Change Movie</button> */}
      {filteredMovies.map( (e) => {
        return <h3>{e.name} was released on {e.year}</h3>
      } )}
    </div>
  );
}

export default App;
