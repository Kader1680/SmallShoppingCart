import React from 'react'
import './cartitem.css'
export default function CartItem(props) {
    const {id, title, img, price} = props.data
    return (
      <div class="MyCard">
            <div class="row">
                <div class="col-md-8 MyCart">
                       
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src={img} /></div>
                            <div class="col">
                                <div class="row text-muted">Shirt</div>
                                <div class="row">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                <a  href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&euro; {price} <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
            
        </div>
    )
}
