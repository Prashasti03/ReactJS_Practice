import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = "bab8d86d";

  // Search Movies
  const searchMovies = async () => {
    if (!query) return;

    const res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    const data = await res.json();

    setMovies(data.Search || []);
    setSelectedMovie(null);
  };

  // Get Movie Details
  const getMovieDetails = async (id) => {
    const res = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    );
    const data = await res.json();

    setSelectedMovie(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie Search App</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={searchMovies}>Search</button>

      <hr />

      {/* Movie List */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
              width: "200px",
              cursor: "pointer"
            }}
            onClick={() => getMovieDetails(movie.imdbID)}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%" }}
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>

      <hr />

      {/* Movie Details */}
      {selectedMovie && (
        <div>
          <h2>{selectedMovie.Title}</h2>
          <img src={selectedMovie.Poster} alt="" />
          <p><b>Year:</b> {selectedMovie.Year}</p>
          <p><b>Genre:</b> {selectedMovie.Genre}</p>
          <p><b>Plot:</b> {selectedMovie.Plot}</p>
        </div>
      )}
    </div>
  );
}

export default App;