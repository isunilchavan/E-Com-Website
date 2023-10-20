import React from "react";
import { Modal, Button, ListGroup, Image } from "react-bootstrap";

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and White Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }
];

function Cart({ showCart, onClose, onRemoveItem }) {
  return (
    <Modal show={showCart} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          {cartElements.map((item, index) => (
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
                  onClick={() => onRemoveItem(index)}
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
