import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../components/contextApi';
import { useNavigate } from 'react-router-dom';

function Header() {
    const { cartCount } = useCart();
  return (
    <header>
     <div className="header-left">
        <span>Ekart Home</span>
      </div>
      <div className="header-right">
        <FaShoppingCart size={24}/>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;
