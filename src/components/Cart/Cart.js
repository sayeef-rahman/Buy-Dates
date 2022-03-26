import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    console.log(cart);
    return (
        <div className='cart-product'>
                {cart.map((item) => (
                        <h4 key={item.id} >
                        <img src={item.image} alt="" /> {item.name}
                        </h4>
                        )
                    )
                }
        </div>
    );
};
export default Cart;