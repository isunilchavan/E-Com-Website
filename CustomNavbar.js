import React from "react";
import { Navbar, Nav, Badge, Button } from "react-bootstrap";
import { useCart } from "./CartContext";
import { NavLink } from "react-router-dom";

function CustomNavbar({ onShowCart }) {
  const { state } = useCart();

  const itemCount = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Assuming you have a handleLogout function
  const handleLogout = () => {
    // Implement your logout logic here
  };

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
        {state.token ? (
          // Display a "Log Out" button if the user is authenticated
          <Button variant="danger" onClick={handleLogout}>
            Log Out
          </Button>
        ) : (
          // Display a "Log In" link if the user is not authenticated
          <Nav.Link as={NavLink} to="/login">
            Log In
          </Nav.Link>
        )}
        <Nav.Link onClick={onShowCart} className="btn btn-primary">
          <i className="fas fa-shopping-cart"></i> Cart{" "}
          <Badge bg="secondary">{itemCount}</Badge>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
