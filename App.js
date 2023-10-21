import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Products from "./components/Products";
import CustomNavbar from "./components/CustomNavbar";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import the 'Routes' component instead of 'Switch'
import About from "./components/About";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Router>
        <Container>
          <CustomNavbar onShowCart={handleShowCart} />
          <h1>E-Commerce Website</h1>
          <Routes>
            <Route path="/about" element={<About />} /> {/* Use 'element' to define the component */}
            <Route path="/" element={<Products />} /> {/* Use 'element' to define the component */}
          </Routes>
          <Cart showCart={showCart} onClose={handleCloseCart} />
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
