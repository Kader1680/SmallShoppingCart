import React, {useContext} from 'react'
import './product.css'
import {ShopContext} from "../../context/ShopContext"
export default function Product(props) {
    const {id, title, price, img} = props.data
    const { cartItems, AddCart, RemoveCart } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
  return (
    <div class="products">
        <div className='feild'>
            <img src ={img}  />
            <div className='info'>
                <p>{title}</p>
                <p>{price}$</p>
                <button onClick={()=>{AddCart(id)}}>add to cart
                {
                  // if cartitem > 0 then 
                  cartItemAmount > 0 && <> ({cartItemAmount}) </>
                }
                
                </button>
            </div>
        </div>
    </div>
  )
}




















