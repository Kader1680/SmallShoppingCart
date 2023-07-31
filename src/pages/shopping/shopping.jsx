import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {PRODUCTS} from "../../product"
import Product from "./product"
import './shopping.css'

export default function Shopping() {

  const [data, setdata] = useState(PRODUCTS);

 
  const Filter = (Categorie) => {
      const result = PRODUCTS.filter((CategoryProduct)=>{
          return CategoryProduct.categorie === Categorie;
      })

      setdata(result);
  }
  
  return (
    <div>
        <div  className="container categorie d-flex">
              <p onClick={()=>setdata(PRODUCTS) }>all</p>
              <p onClick={()=>Filter('men')}>Man</p>
              <p onClick={()=>Filter('children') }>Children </p>
              <p onClick={()=>Filter('black') }>Shoes</p>
              <p onClick={()=>Filter('white') }>tie</p>
              <p onClick={()=>Filter('classic') }>Classic</p>
            </div>
        <div className='products ' >
            
            
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
