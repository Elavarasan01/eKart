import React from 'react';

import BikeBoy from '../assets/bikeboy.jpeg'
import RedBull from '../assets/RedBull.jpeg'
import GostTrackter from '../assets/goaster.jpeg'
import { useCart } from '../components/contextApi';

function RecommendedProducts() {
    const { addToCart } = useCart();
    const recommendedProducts = [
        { id: 1, name: 'Bike Boy', price: 2450.99, imageUrl: BikeBoy },
        { id: 2, name: 'Red V5', price: 6634.99, imageUrl: RedBull },
        { id: 3, name: 'Trackter', price: 444.99, imageUrl: GostTrackter },
      ];
  return (
    <section className="recommended-products">
      <h2>Recommended Products</h2>
      <div className="product-list">
        {recommendedProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecommendedProducts;
