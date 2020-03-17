import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, price, stock, key} = props.product;
    //console.log(props.product.showAddToCart);
    //console.log(props);
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                 <Link to={`/product/${key}`} className="none">
                    <h4 className="product-name">{name}</h4>
                </Link>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                {
                props.showAddToCart && <button className="cart-btn" onClick={() => props.handleAddProduct(props.product)}>
                <FontAwesomeIcon icon={faShoppingCart} />
                add to cart</button>}
            </div>
        </div>
    );
};

export default Product;