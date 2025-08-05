import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="flip-card-front">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <div>
            <h3>{product.title}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> ⭐ {product.rating}</p>
            <p>{product.description.substring(0, 120)}...</p>
          </div>
          <button onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;