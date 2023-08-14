import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App'
import "./navbar.scss"
import { useState } from 'react';
import Mycount from '../comenents/Count';


import {ThemeContext} from "../App"

// import MyCount from './Count';
export default function Navbar() {

  const dark = useContext(ThemeContext)
  
  const [Nav, setNav] = useState(false);

  function Dnav() {
        setNav(!Nav)
  }


  
  return (
    <nav className=' p-4 ' style={ { backgroundColor: dark ? "black" : "white "}}  >
          
            <div className='container content'>
            <h4>
                <Link class="logo text-decoration-none" to="/SmallShoppingCart">
                   {/* <i class="fa-solid fa-moon"></i>
                   <i class="fa-solid fa-sun"></i> */}
                </Link>
            </h4>
            <div style={{ color : dark ? "white" : "black"  }} class={`leftSide ${(Nav ? "blk" : '')}`}>
              <ul >
                <li  >
                  <Link style={{ color : dark ? "white" : "black"  }}  target="_parent" class="text-decoration-none" to="/SmallShoppingCart">Home</Link>
                </li>
                <li>
                  <Link style={{ color : dark ? "white" : "black"  }} target="_parent" class="text-decoration-none" to="/shop">Product</Link>
                </li>
                <li>
                   <Link style={{ color : dark ? "white" : "black"  }} target="_parent" class="text-decoration-none" to="/SmallShoppingCart/test">TestiPmonial</Link>
                </li>
                
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

            <i onClick={Dnav} class= "fs-2 fa-solid fa-bars"></i>
            </div>

    </nav>
  )
}
