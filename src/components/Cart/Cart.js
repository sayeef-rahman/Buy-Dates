import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    console.log(cart);
    return (
        <div className='cart-product'>
                <img src={cart.map(date => date.img)} alt="" />
                <p>{cart.map(date => date.name)}</p>
        </div>
    );
};

export default Cart;