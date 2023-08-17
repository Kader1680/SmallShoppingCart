import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App'
import "./navbar.scss"
import { useState } from 'react';
import Mycount from '../comenents/Count';
import brand from "../img/brand.png"

import {ThemeContext} from "../App"

// import MyCount from './Count';
export default function Navbar() {

  const dark = useContext(ThemeContext)
  
  const [Nav, setNav] = useState(false);
  const [close, setclose] = useState(false);
  function Dnav() {
        setNav(!Nav)
  }
  function Close() {
    setclose(!close)
}

  
  return (
    <nav className=' p-4 ' style={ { backgroundColor: dark ? "black" : "white "}}  >
          
            <div className='container content'>
            <h4>
                <Link class="logo text-decoration-none" to="/SmallShoppingCart">
                   <img style={{ width:"50px" }} src= { brand }  />
                </Link>
            </h4>
            <div style={{ color : dark ? "white" : "black"  , backgroundColor :dark ? "black" : ""  }} class={`leftSide ${(Nav ? "blk" : '')}`}>
              <ul   >
                <li  >
                  <Link style={{ color : dark ? "white" : "black"  }}   class="text-decoration-none" to="/SmallShoppingCart">Home</Link>
                </li>
                <li>
                  <Link style={{ color : dark ? "white" : "black"  }}  class="text-decoration-none" to="/SmallShoppingCart/shop">Product</Link>
                </li>
                <li>
                   <Link style={{ color : dark ? "white" : "black"  }} class="text-decoration-none" to="/SmallShoppingCart/test">TestiPmonial</Link>
                </li>
                <button onClick={Dnav} style={{ backgroundColor: "#0a0d35", color: "white" }} class="btn pt-2 pb-2 ps-5 pe-5 mt-5 d-md-none" role="button"><span onClick={Close}>close</span></button>
              </ul>
              <div className='search'>
                <input className=' border-none' />
                <i class=" text-black fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <Link to="/SmallShoppingCart/cart"><i style={{ color : dark ? "white" : "black"  }} class="shop text-decoration-none fa-solid fa-cart-shopping fs-4">
            
            </i>
            
            </Link>
            <Link to="/SmallShoppingCart/login"><i style={{ color : dark ? "white" : "black"  }} class="fa-solid fa-user fs-4"></i></Link>

            <span onClick={Dnav}>
               <i onClick={Close}   style={{ color : dark ? "white" : "black"  }} class={`fs-1 fa-solid  ${(close ? "fa-close" : " fa-bars" )} `} ></i>
            </span>
            </div>

    </nav>
  )
}
