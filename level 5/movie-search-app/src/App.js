// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import './App.css';
import mockMovies from './mockMovies'; // Mock data fallback

const App = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (search.length < 3) return;

    setLoading(true);
    setError('');

    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${search}`
        );

        if (res.data.Response === 'True') {
          setMovies(res.data.Search);
        } else {
          setError(res.data.Error);
          setMovies([]);
        }
      } catch (err) {
        console.warn('API fetch failed, falling back to mock data.');

        // Fallback to mock data
        const filtered = mockMovies.filter((movie) =>
          movie.Title.toLowerCase().includes(search.toLowerCase())
        );
        if (filtered.length > 0) {
          setMovies(filtered);
        } else {
          setError('No movies found.');
          setMovies([]);
        }
      } finally {
        setLoading(false);
      }
    };

    // Debounce the search to avoid excessive API calls
    const debounce = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(debounce);
  }, [search]);

  return (
    <Router>
      <div className="App">
        <h1>🎬 Movie Search App</h1>
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <div className="movies-container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>

        <Routes>
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
