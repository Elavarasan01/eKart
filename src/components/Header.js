import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../components/contextApi';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const { cartCount } = useCart();
    const navigate=useNavigate();
  return (
    <header>
     <div className="header-left">
        <Link to='/'><span>Ekart Home</span></Link>
      </div>
      <div className="header-right">
        <FaShoppingCart size={24} onClick={()=>navigate('/cart')}/>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;
