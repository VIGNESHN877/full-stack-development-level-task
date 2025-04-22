
import axios from 'axios';

let cache = null;

export const fetchProducts = async () => {
  if (cache) return cache;
  const { data } = await axios.get('https://dummyjson.com/products?limit=1000');
  cache = data.products;
  return cache;
};
