import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Products from "./components/Products";
import CustomNavbar from "./components/CustomNavbar";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

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
          <h2 style={{ marginTop: "70px" }}>E-Commerce Website</h2>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Products />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Cart showCart={showCart} onClose={handleCloseCart} />
        </Container>
      </Router>
      <Footer />
    </CartProvider>
  );
}

export default App;
