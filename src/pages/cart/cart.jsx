import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {PRODUCTS} from "../../product" 
import {ShopContext} from "../../context/ShopContext"
import CartItem from "./cartItem"
export default function Cart() {

  const {cartItems} = useContext(ShopContext)

  return (
    <div>
      <h1>there is your cart</h1>
      <div class="cartitems d-flex justify-content-center">
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
