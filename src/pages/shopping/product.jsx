import React, {useContext} from 'react'
import './product.css'
import {ShopContext} from "../../context/ShopContext"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Product(props) {
    const {id, title, price, img} = props.data
    const { cartItems, AddCart, RemoveCart } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
  return (
    <div class="products">
        <div className='feild text-center rounded'>
            <img src ={img}  />
            <div className='info'>
                <div class="mt-2 mb-2 d-flex justify-content-around text-center">
                  <h5>{title}</h5>
                  <p>{price}$</p>
                </div>

                <button className=' border-0' onClick={()=>{AddCart(id)}}>add to cart
                {
                  // if cartitem > 0 then 
                  cartItemAmount > 0 && <span className='p-2 counter'> {cartItemAmount} </span>
                }
                
                </button>
            </div>
        </div>
    </div>
  )
}




















