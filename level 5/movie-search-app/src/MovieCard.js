// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} />
      <h3>{movie.Title}</h3>
    </Link>
  );
};

export default MovieCard;
