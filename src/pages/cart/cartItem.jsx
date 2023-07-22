import React from 'react'
import './cartitem.scss'
export default function CartItem(props) {
    const {id, title, img, price} = props.data
    return (
      <div className='card '>
            {/* <img src ={img}  />
            <div className='info'>
                <p>{title}</p>
                <p>{price}$</p>
            </div> */}
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
                
            </div>
              
      </div>
    )
}
