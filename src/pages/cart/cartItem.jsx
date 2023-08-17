import React, {useState} from 'react'
import './cartitem.css'
export default function CartItem(props) {
    const {id, title, img, price} = props.data
    const [prices, setprices] = useState(price);
    
    
    return (
      <div class="MyCard">
      
            <div class="row">
                <div class="col-md-8 MyCart">
                       
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src={img} /></div>
                            <div class="col">
                                <h4 class="row text-muted">{title}</h4>
                                <p class="row">Cotton T-shirt</p>
                            </div>
                            <div class="col">
                                <a className='me-2 rounded-2 border-rounded bg-primary p-2 text-white' onClick={()=> setprices(prices - 100)}>-</a><a  class="border p-2  me-2 ">{prices} $ </a><a onClick={()=> setprices(prices + 100)} className='rounded-2 border-rounded bg-primary p-2 text-white '>+</a>
                            </div>
                            <div class="col"><span class="close"> &#10005;</span></div>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
            
        </div>
    )
}
