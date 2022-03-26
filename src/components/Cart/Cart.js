import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    console.log(cart);
    return (
        <div className='cart-product'>
                {cart.map((item) => (
                        <h6 key={item.id} >
                        <img src={item.img} alt="" /> {item.name}
                        </h6>
                        )
                    )
                }
        </div>
    );
};
export default Cart;

{/* <h4 key={item.id} >
<img src={item.img} alt="" /> {item.name}
</h4> */}