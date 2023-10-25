import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import CustomNavbar from "./components/CustomNavbar";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    reviews: [
      {
        image: "https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&w=100",
        description: "This product is amazing!",
      },
    ],
  },
  {
    title: "Black and White Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    reviews: [
      {
        image: "https://images.pexels.com/photos/4819572/pexels-photo-4819572.jpeg?auto=compress&cs=tinysrgb&w=200",
        description: "This product is amazing!",
      },
    ],
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    reviews: [
      {
        image: "https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&w=200",
        description: "This product is amazing!",
      },
    ],
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    reviews: [
      {
        image: "https://images.pexels.com/photos/6273480/pexels-photo-6273480.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "This product is amazing!",
      },
    ],
  },
];

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
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Products productsArr={productsArr} />} />
            <Route path="/products/:productId" element={<ProductDetails productsArr={productsArr} />} />
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