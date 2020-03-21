
import React from 'react';
import '../Cart/Cart.css';

const product = {
    color: "blue",
    marginLeft: "200px",
    borderBottom: "1px solid gray",
}

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div style={product}>
            <h4>{name}</h4>
            <p style={{color:"black"}}>Quantity: {quantity}</p>
            <p><small>{price}</small></p>
            <br/>
            <button onClick={() => props.removeProduct(key)} style={{marginBottom: "10px"}} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;