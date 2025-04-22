import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

// Cache store (shared across hook instances)
const cache = new Map();

export default function useAxios(url, config = {}, options = { forceRefresh: false }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [refreshIndex, setRefreshIndex] = useState(0); // trigger refresh

  const forceRefresh = useCallback(() => {
    setRefreshIndex(prev => prev + 1); // change state to trigger useEffect
  }, []);

  useEffect(() => {
    let cancelToken;

    const fetchData = async () => {
      setLoading(true);
      setError('');

      const cacheKey = JSON.stringify({ url, config });

      // Check cache
      if (cache.has(cacheKey) && !options.forceRefresh) {
        setData(cache.get(cacheKey));
        setLoading(false);
        return;
      }

      try {
        cancelToken = axios.CancelToken.source();

        const response = await axios.get(url, {
          ...config,
          cancelToken: cancelToken.token,
        });

        cache.set(cacheKey, response.data); // Store in cache
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request cancelled');
        } else {
          setError('Error fetching data');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (cancelToken) cancelToken.cancel();
    };
  }, [url, config, refreshIndex, options.forceRefresh]);

  return { data, loading, error, forceRefresh };
}
