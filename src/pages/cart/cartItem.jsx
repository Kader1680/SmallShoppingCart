import React from 'react'

export default function CartItem(props) {
    const {id, title, img, price} = props.data
    return (
      <div className='feild'>
            <img src ={img}  />
            <div className='info'>
                <p>{title}</p>
                <p>{price}$</p>
            </div>
      </div>
    )
}
