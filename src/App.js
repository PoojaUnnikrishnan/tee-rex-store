import { useState, useCallback } from 'react';
import { defaultCss } from './components/defaultCss';
import './App.css';
import { Navbar } from './components/Navbar';
import { ProductSection } from './components/ProductSection';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cart } from './components/Cart';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const handleAddToCart = useCallback((item) => {
    setCart(prevCart => {
      const newCart = [...prevCart, item];
      localStorage.setItem('cart', JSON.stringify(newCart));
      item.quantity -= 1
      return newCart;
    });
  }, []);
  return (
    <div className='h-screen'>
      <BrowserRouter>
        <Navbar cart={cart} />
        <div className={`${defaultCss.defaultPadding} h-full`}>
          <Routes>
            <Route path="/" element={<ProductSection handleAddToCart={handleAddToCart} cart={cart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
