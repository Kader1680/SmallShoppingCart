import React, {useContext, useState} from 'react'
import './product.css'
import {ShopContext} from "../../context/ShopContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../cart/cart';

export default function Product(props) {
    const {id, title, price, img} = props.data
    const { cartItems, AddCart, RemoveCart } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
    
  return (
    <div class="products">
        <div className='text-black feild rounded'>
            <img src ={img}  />
            <div className='info'>
                <div class=" d-flex justify-content-around">
                  <p className=' fw-bolder'>{title}</p>
                  <p className=' fw-bolder'>{price}$</p>
                  
                </div>
                <p className='ms-2 myp'>this is product</p>
                <div class='star ms-2'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <button className=' '  onClick={()=>{
                  
                  AddCart(id)
                }}>add to cart
                
                {/* {
                  // if cartitem > 0 then 
                  cartItemAmount > 0 && <span className='p-2 counter'> {cartItemAmount} </span>
                } */}
                
                </button>
                
            </div>
        </div>
    </div>
  )
}




















