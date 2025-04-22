// src/ProductSearch.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from './data';

const ProductSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");

  useEffect(() => {
    const params = {};
    if (search) params.q = search;
    if (category) params.category = category;
    setSearchParams(params);
  }, [search, category, setSearchParams]);

  // Filter logic
  const filtered = products.filter((product) => {
    return (
      (!search || product.name.toLowerCase().includes(search.toLowerCase())) &&
      (!category || product.category === category)
    );
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Search</h2>
      <input
        type="text"
        placeholder="Search name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: '10px' }}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
      </select>

      <ul style={{ marginTop: '20px' }}>
        {filtered.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
