import Header from './components/Header';
import FeaturedProducts from './components/FeaturedProducts';
import RecommendedProducts from './components/RecommendedProducts';
import Footer from './components/Footer';
import './App.css';
import { CartProvider } from './components/contextApi';
import CartDetailsPage from './components/CartDetailsPage';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <CartProvider>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<FeaturedProducts/>}/>
      {/* <Route path='/' exact element={<FeaturedProducts/>}/> */}
      <Route path="/cart" element={<CartDetailsPage/>} />
    </Routes>
    </BrowserRouter>
    <RecommendedProducts />
    </CartProvider>
    <Footer />
  </div>
  );
}

export default App;
