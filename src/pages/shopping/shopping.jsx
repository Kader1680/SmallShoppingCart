import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {PRODUCTS} from "../../product"
import Product from "./product"
import './shopping.css'

export default function Shopping() {
  return (
    <div className='products' >
        {
          PRODUCTS.map((item)=>
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
