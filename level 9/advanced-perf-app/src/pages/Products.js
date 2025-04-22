
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { fetchProducts } from '../api/fetchProducts';
import ProductList from '../components/ProductList';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const filtered = useMemo(() =>
    products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
  , [query, products]);

  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  return (
    <div>
      <input
        placeholder="Search products"
        onChange={handleChange}
        style={{ padding: 10, margin: 20, width: '50%' }}
      />
      <ProductList products={filtered} />
    </div>
  );
}
