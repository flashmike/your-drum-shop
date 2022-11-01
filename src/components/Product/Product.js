import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, price, currency, image, isInCart } = this.props;

        return (
            <Container className='border border-secondary padded'>
                <Row>
                    <Col xs md="auto">
                        <img src={image} alt="product" className='img-fluid' />
                    </Col>
                </Row>
                <Row>
                    <Col className='caption'>
                        <h4 className='title'>{name}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className='product__price'>
                        <h5 className='blackened2'>{currency} {price}</h5>
                    </Col>
                    <Col className='product__button-wrap'>
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to Cart'}
                        </button></Col>
                </Row>
            </Container>

        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
