import React from 'react'
import './product.css'
export default function Product(props) {
    const {id, title, price, img} = props.data
  return (
    <div class="products">
        <div className='feild'>
            <img src ={img}  />
            <div className='info'>
                <p>{title}</p>
                <p>{price}$</p>
                <button>add to cart</button>
            </div>
        </div>
    </div>
  )
}
