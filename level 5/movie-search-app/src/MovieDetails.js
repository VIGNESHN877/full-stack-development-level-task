// src/pages/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}&plot=full`);
        setDetails(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <p>Loading details...</p>;

  return details ? (
    <div className="movie-details">
      <h2>{details.Title}</h2>
      <img src={details.Poster} alt={details.Title} />
      <p><strong>Plot:</strong> {details.Plot}</p>
      <p><strong>Actors:</strong> {details.Actors}</p>
      <p><strong>Rating:</strong> {details.imdbRating}</p>
    </div>
  ) : (
    <p>Movie details not found.</p>
  );
};

export default MovieDetails;
