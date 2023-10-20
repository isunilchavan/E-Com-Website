import React from 'react';
import { Container } from 'react-bootstrap';

import Products from './components/Products'; 

function App() {
  return (
    <Container>
      <h1>My E-Commerce Website</h1>
      <Products />
    </Container>
  );
}

export default App;
