
import React from 'react';

const ProductCard = React.memo(({ product }) => (
  <div style={{ border: '1px solid #ddd', padding: 10 }}>
    <img src={product.thumbnail} alt={product.title} width={100} height={100} loading="lazy" />
    <h4>{product.title}</h4>
    <p>${product.price}</p>
  </div>
));

export default ProductCard;
