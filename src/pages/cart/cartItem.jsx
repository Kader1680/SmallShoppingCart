import React from 'react'
import './cartitem.css'
export default function CartItem(props) {
    const {id, title, img, price} = props.data
    return (
      <div className='card '>
            <img src ={img}  />
            <div className='info'>
                <p>{title}</p>
                <p>{price}$</p>
            </div>
      </div>
    )
}
