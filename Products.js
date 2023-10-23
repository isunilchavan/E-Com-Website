import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function ProductCard({ title, price, imageUrl,index }) {
  const { dispatch } = useCart(); // Use the useCart hook to access the dispatch function.

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const btnMargin={marginLeft:"10px"};


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        
        <Button variant="primary" onClick={() => addToCart({ title, price, imageUrl })}>
          Add to Cart
        </Button>
        <Link to={`/products/${index}`} onClick={stopPropagation}>
          <Button variant="warning" style={btnMargin}>View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

function Products({ productsArr }) {
  return (
    <Container>
      <h1>Products</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index}>
            <ProductCard {...product} index={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;