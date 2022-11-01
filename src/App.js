//created by Mike Flash | flashmike.com
import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (
    <Container>
      <Row>
        <Col lg="8">
          <ProductList />
        </Col>
        <Col xs md="4">
          <Cart />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
