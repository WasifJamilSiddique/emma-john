
import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder  } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import './Review.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/user-auth';
import { ButtonToolbar } from 'react-bootstrap';

const Review = () => {
    const[cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const auth = useAuth();

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    
    const removeProduct = (productKey) => {
        console.log('remove clicked', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key===key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProduct);
    }, [])
     let thankyou;
    if (orderPlaced) thankyou = <img src={happyImage} alt="" />
    return (
        <div className="container">
            <div className="review-container">
                {
                    cart.map(pd => {
                        return <ReviewItem removeProduct={removeProduct} key={pd.key} product={pd}></ReviewItem>
                    })
                }
                {
                    thankyou
                }
                {
                    !cart.length && <h1>You cart is empty <a href="/shop">
                        Keep Shopping!!
                    </a></h1>
                }
            </div>
            <div className="cart-container">
                 <Cart cart={cart}>
                      <Link to="/shipment">
                        {   auth.user ?
                            <button className="cart-btn">Proceed Checkout</button>
                            :
                            <button className="cart-btn">Login to Proceed</button>
                        }
                      </Link>
                 </Cart>
            </div>
        </div>
    );
};

export default Review;