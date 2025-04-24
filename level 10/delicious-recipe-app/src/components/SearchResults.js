import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { searchRecipes } from '../services/api';

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const cachedResults = localStorage.getItem(`search-${query}`);
        
        if (cachedResults) {
          setResults(JSON.parse(cachedResults));
        } else {
          const response = await searchRecipes(query);
          const resultsData = response.data.results;
          localStorage.setItem(`search-${query}`, JSON.stringify(resultsData));
          setResults(resultsData);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      
      <div className="results-grid">
        {results.map((recipe) => (
          <motion.div 
            key={recipe.id}
            className="recipe-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;