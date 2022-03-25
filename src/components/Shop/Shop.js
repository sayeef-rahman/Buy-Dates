import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import '../Cart/Cart.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (products) =>{
        // cart = products;
        // console.log(products);
        // console.log("Cart: ",cart);
        const newCart = [...cart,products];
        // console.log("New Cart Length: ",newCart.length);
        if(newCart.length <= 4){
            setCart(newCart);
        }
        
    };

    return (
        <div className='shop-container'>
            <div className="cart-container">
                <p className='cart-title'>Cart</p>
                <div>
                    <Cart cart={cart}></Cart><br/>
                {/* <img src={cart.map(date => date.img)} alt="" />
                <p>{cart.map(date => date.name)}</p> */}
                </div>
            </div>
            <div className="products-container">
            {
                    products.map(product =><Product
                         key={product.id}
                         product={product}
                         handleAddToCart = {handleAddToCart}
                         >
                    </Product>)
                }
            </div>
            
        </div>
    );
};

export default Shop;