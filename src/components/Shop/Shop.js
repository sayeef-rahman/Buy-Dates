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

    const handleAddToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product =>product.id === selectedProduct.id);
        if(!exists){
            newCart = [...cart,selectedProduct];
            if(newCart.length <= 4){
                setCart(newCart);
            }
        }
        else{
            alert("Already in Cart! Select Another One");
        }
        // return newCart;
    };
    const chooseAgain = () =>{
        // console.log(setCart());
        setCart([]);
    };
    const chooseOne = () =>{
        if(cart.length>0){
        const anyOneItem= Math.floor(Math.random() * cart.length);
        setCart([cart[anyOneItem]]);
        }
    };
    
    return (
        <div className='shop-container'>
            <div className="cart-container">
                <p className='cart-title'>Cart</p>
                <Cart cart={cart}></Cart>
                <div className='cart-btn-container'>
                <button className='cart-btn' onClick={chooseOne} >Choose One</button>
                <button className='cart-btn' onClick={chooseAgain}>Choose Again</button>
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