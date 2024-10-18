import { useState, useCallback } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ProductSection } from "./components/ProductSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });
  const [errorMessages, setErrorMessages] = useState({});

  const handleAddToCart = useCallback((item) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item.id]) {
        if (newCart[item.id].qty < item.quantity) {
          newCart[item.id] = {
            ...newCart[item.id],
            qty: newCart[item.id].qty + 1,
          };
          setErrorMessages((prev) => ({ ...prev, [item.id]: "" }));
        } else {
          setErrorMessages((prev) => ({
            ...prev,
            [item.id]: `Maximum quantity (${item.quantity}) reached for ${item.name}`,
          }));
        }
      } else {
        newCart[item.id] = { ...item, qty: 1 };
        setErrorMessages((prev) => ({ ...prev, [item.id]: "" }));
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }, []);

  const handleRemoveFromCart = useCallback((itemId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemId] && newCart[itemId].qty > 1) {
        newCart[itemId] = {
          ...newCart[itemId],
          qty: newCart[itemId].qty - 1,
        };
      } else {
        delete newCart[itemId];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      setErrorMessages((prev) => ({ ...prev, [itemId]: "" }));
      return newCart;
    });
  }, []);
  const handleDeleteFromCart = useCallback((itemId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[itemId];
      console.log("new cartt", newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }, []);
  return (
    <div class="">
      <BrowserRouter>
        <Navbar cart={cart} />
        <div class={`h-full px-5 md:px-0 md:pr-2 lg:pr-8`}>
          <Routes>
            <Route
              path="/"
              element={
                <ProductSection
                  handleAddToCart={handleAddToCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                  cart={cart}
                  errorMessages={errorMessages}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleAddToCart={handleAddToCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleDeleteFromCart={handleDeleteFromCart}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
