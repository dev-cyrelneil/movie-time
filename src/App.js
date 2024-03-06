import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// 347c20ca

const API_URL = "http://www.omdbapi.com?apikey=347c20ca";

const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  Title: "The Toxic Avenger",
  Type: "movie",
  Year: "1984",
  imdbID: "tt0090190",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("All");
  }, []);

  return (
    <div className="app">
      <h1>ChillTime</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="search" onClick={(e) => searchMovie(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found.</h2>
        </div>
      )}
    </div>
  );
};

export default App;
