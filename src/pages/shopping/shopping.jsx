import React, {useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {PRODUCTS} from "../../product"
import Product from "./product"
import './shopping.css'
import { ThemeContext } from '../../App';




export default function Shopping() {

  const [data, setdata] = useState(PRODUCTS);
  const dark = useContext(ThemeContext)
 
  const Filter = (Categorie) => {
      const result = PRODUCTS.filter((CategoryProduct)=>{
          return CategoryProduct.categorie === Categorie;
      })

      setdata(result);
  }
  
  return (
    <div style={{ backgroundColor: dark ? "black" : " " }} >
        <div style={{ backgroundColor: dark ? "black" : " " }}  className=" categorie d-flex">
              <p style={{ backgroundColor: dark ? "white" : " ", color: dark ? "black" : " " } }   onClick={()=>setdata(PRODUCTS) }>all</p>
              <p style={{ backgroundColor: dark ? "white" : " ", color: dark ? "black" : " " } } onClick={()=>Filter('men')}>Man</p>
              <p style={{ backgroundColor: dark ? "white" : " ", color: dark ? "black" : " " } } onClick={()=>Filter('Cap') }>Cap </p>
              <p style={{ backgroundColor: dark ? "white" : " ", color: dark ? "black" : " " } } onClick={()=>Filter('shoes') }>Shoes</p>
              <p style={{ backgroundColor: dark ? "white" : " ", color: dark ? "black" : " " } } onClick={()=>Filter('tie') }>tie</p>
              <p style={{ backgroundColor: dark ? "white" : " ", color: dark ? "black" : " " } } onClick={()=>Filter('classic') }>Classic</p>
            </div>
        <div  style={{ backgroundColor: dark ? "black" : " " }} className='products ' >
            
            
            {
              data.map((item)=>
                {
                    return(
                        <Product data = {item}  />
                    )
                }
                )
            }
        </div>
    </div>
    
  )
}
