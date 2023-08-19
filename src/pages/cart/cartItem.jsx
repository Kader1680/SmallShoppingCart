import React, {useState} from 'react'
import './cartitem.css'
export default function CartItem(props) {
    const {id, title, img, price} = props.data
    const [prices, setprices] = useState(price);
    
    
    return (
        <div class=" MyCart d-flex align-items-md-center justify-content-md-around align-items-sm-center flex-sm-wrap flex-sm-row">
                       
        <div class="">
            <img style={{ width:"120px" }} class="" src={img} />
        </div>
        <div class="">
            <h4 class=" ">{title}</h4>
            <p class="">Cotton T-shirt</p>
        </div>
        <div class=" mt-sm-2">
            <a className='me-2 rounded-2 border-rounded bg-primary p-2 text-white' onClick={()=> setprices(prices - 100)}>-</a><a  class="border p-2  me-2 ">{prices} $ </a><a onClick={()=> setprices(prices + 100)} className='rounded-2 border-rounded bg-primary p-2 text-white '>+</a>
        </div>
        <div class=""><span class="close"> &#10005;</span></div>
    </div>
    )
}
