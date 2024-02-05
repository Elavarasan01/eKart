import React, { useState } from 'react';
import Scorpio from '../assets/xus.jpeg';
import Toycar from '../assets/toycar.jpeg';
import MC from '../assets/yellowcar.jpeg';
import { useCart } from '../components/contextApi';
import Header from './Header';
import RecommendedProducts from './RecommendedProducts';

function FeaturedProducts() {
  const products = [
    { id: 1, name: 'Scorpia', price: 495.00, imageUrl: Scorpio },
    { id: 2, name: 'Red Tractor', price: 99.00, imageUrl: Toycar },
    { id: 3, name: 'Lightning McQueen', price: 4187.99, imageUrl: MC },
  ];

  const { addToCart } = useCart();

  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'priceLowToHigh') {
      return a.price - b.price;
    } else if (sortBy === 'priceHighToLow') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <Header />
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="filter-sort-container">
          <div className="filter-container">
            <label>
              Filter :
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder='search your product..'
              />
            </label>
          </div>
          <div className="sort-container">
            <label>
              Sort by : 
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Select</option>
                <option value="priceLowToHigh">Low to High</option>
                <option value="priceHighToLow">High to Low</option>
              </select>
            </label>
          </div>
        </div>
        <div className="product-list">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <RecommendedProducts />
    </>
  );
}

export default FeaturedProducts;
