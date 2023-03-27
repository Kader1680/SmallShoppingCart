import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AZE} from "../../product"
import Product from "./product"
import './shopping.css'

export default function Shopping() {
  return (
    <div className='products' >
        {
            AZE.map((item)=>
            {
                return(
                    <Product data = {item}  />
                )
            }
            )
        }
    </div>
  )
}
