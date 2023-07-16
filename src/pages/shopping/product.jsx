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
        <div className='text-black feild rounded'>
            <img src ={img}  />
            <div className='info'>
                <div class=" d-flex justify-content-around">
                  <p>{title}</p>
                  <p>{price}$</p>
                  
                </div>

                <button  onClick={()=>{AddCart(id)}}>add to cart
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




















