import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import './App.css';
import { CartProvider } from './components/contextApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartDetails from './components/cartDetails';

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<FeaturedProducts />} />
            <Route path='/cart' element={<CartDetails/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
