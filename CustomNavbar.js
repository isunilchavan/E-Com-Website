import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { useCart } from "./CartContext";
import { NavLink } from "react-router-dom";

function CustomNavbar({ onShowCart }) {
  const { state } = useCart();

  const itemCount = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand as={NavLink} to="/">
        Home
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={NavLink} to="/store">
          Store
        </Nav.Link>
        <Nav.Link as={NavLink} to="/contact">
          Contact Us
        </Nav.Link>
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
