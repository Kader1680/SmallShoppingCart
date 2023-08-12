import React, {useContext, useState, useEffect} from 'react'
import './product.css'
import {ShopContext} from "../../context/ShopContext"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../cart/cart';


export default function Product(props) {
    const {id, title, price, img} = props.data
    const { cartItems, AddCart, RemoveCart } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
    
    const [count, setcount] = useState(0);
   
  return (
    <div class="container23">
      
      <div class="product-card">
        <div class="product-image">
          <img src= {img} alt="Product Image" />
        </div>
        <div class="product-details">
          <h2 class="product-title">{title}</h2>
          <p class="product-price">{price}</p>
          <p class="product-description">This is a brief description of the product.</p>
          <div class="buttons">
            <button onClick={()=>{ AddCart(id)} } class="add-to-cart"><i onClick={()=>setcount(count + 1)} class="fa-solid fa-bag-shopping"></i></button>
            <div style={{ borderRadius: "50px", padding:"5px 10px", backgroundColor: "red", color :"white" }}>{count}</div>
            <button class="compare"><i class="fa-solid fa-bookmark"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}




















