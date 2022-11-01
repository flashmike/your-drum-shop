import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductList = ({ products }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3 className='blackened'>Our Latest Drum Products</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className="product-list">
                        {products.map(product => (
                            <li key={product.id} className="product-list__item padded">
                                <Product {...product} />
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>

    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
