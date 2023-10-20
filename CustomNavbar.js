import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { useCart } from "./CartContext";

function CustomNavbar({ onShowCart }) {
  const { state } = useCart();

  const itemCount = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#store">Store</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link onClick={onShowCart} className="btn btn-primary">
          <i className="fas fa-shopping-cart"></i> Cart{" "}
          <Badge bg="secondary">{itemCount}</Badge>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
