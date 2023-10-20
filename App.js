import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Products from "./components/Products";
import CustomNavbar from './components/CustomNavbar';
import Cart from "./components/Cart"; // Import the Cart component.

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <Container>
      <CustomNavbar onShowCart={handleShowCart} />
      <h1>E-Commerce Website</h1>
      <Products />
      <Cart showCart={showCart} onClose={handleCloseCart} />
    </Container>
  );
}

export default App;
