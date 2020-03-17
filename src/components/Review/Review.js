
import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const[cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        console.log('remove clicked', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key===key);
            product.quantity = savedCart[key];
            return product;
        }, []);
        setCart(cartProduct);
    })
    return (
        <div>
            <h1>Cart Items: {cart.length}</h1>
            {
                cart.map(pd => {
                    return <ReviewItem removeProduct={removeProduct} key={pd.key} product={pd}></ReviewItem>
                })
            }
        </div>
    );
};

export default Review;