import React from "react";
import { Modal, Button, ListGroup, Image } from "react-bootstrap";
import { useCart } from "./CartContext";

function Cart({ showCart, onClose }) {
  const { state, dispatch } = useCart();
  const cartItems = state.cartItems;

  function handleRemoveItem(index) {
    dispatch({ type: "REMOVE_FROM_CART", payload: index });
  }

  return (
    <Modal show={showCart} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              <div className="cart-item">
                <Image src={item.imageUrl} thumbnail />
                <div className="cart-item-details">
                  <h6>{item.title}</h6>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}

export default Cart;