import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {PRODUCTS} from "../../product" 
import {ShopContext} from "../../context/ShopContext"
import CartItem from "./cartItem"
import "./cart.scss"
import noshopinh from '../../img/cart.668e6453-svg.png'
export default function Cart() {

  const {cartItems} = useContext(ShopContext)

  return (
    <div className=''>
      <div className='contianer no-cart'>
          <img src= {noshopinh} />
          <h4>Your cart is Here!</h4>
          <p>Browse our categories and discover our best deals!</p>
      </div>
      <div class="cartitems container">
          {
            PRODUCTS.map((item)=>
            {
              if(cartItems[item.id] !== 0){
                return <CartItem data={item} />
                
              }
            })
          }
      </div>

    </div>
  )
}
