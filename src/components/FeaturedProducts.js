import React,{useState} from 'react';
import Scorpio from '../assets/xus.jpeg'
import Toycar from '../assets/toycar.jpeg'
import MC from '../assets/yellowcar.jpeg'
import { useCart } from '../components/contextApi';
function FeaturedProducts() {
    const { addToCart } = useCart();
    const products = [
        { id: 1, name: 'Scorpia', price: 495.00, imageUrl: Scorpio },
        { id: 2, name: 'Red Tracter', price: 99.00, imageUrl: Toycar },
        { id: 3, name: 'Ligning Mcqueen', price: 4187.99, imageUrl: MC },
      ];

  return (
    <section className="featured-products">
       <h2>Featured Products</h2>
      <div className="product-list">
        {products.map(product => (
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

export default FeaturedProducts;
