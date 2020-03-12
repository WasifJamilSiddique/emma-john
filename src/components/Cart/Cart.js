import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    //const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total += product.price;
    }
    let shipping = 0;
    if(shipping>35)shipping=0;
    else if(total>15)shipping=4.99;
    else if(total>0)shipping=12.99;

    const Tax = (total/10).toFixed(2);
    const grandTotal = (total + shipping + Number(Tax)).toFixed(2);
    
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Ordered: {cart.length}</p>
            <p><small>shipping cost: {shipping}</small></p>
            <p><small>Tax + VAT: {Tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;