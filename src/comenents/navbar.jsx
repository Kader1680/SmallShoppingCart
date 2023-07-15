import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import "./navbar.css"
import "./navbar.scss"
import { useState } from 'react';


export default function Navbar() {


  const [Nav, setNav] = useState(false);

  function Dnav() {
        setNav(!Nav)
  }
  return (
    <nav className=' d-flex justify-content-evenly align-items-center p-4 '>
            
            <h4>
              <Link class="logo text-decoration-none" to="/SmallShoppingCart">shopping cart</Link>
            </h4>
            <div class={`leftSide ${(Nav ? "blk" : '')}`}>
              <ul>
                <li>Categorie </li>
                <li>Deals</li>
                <li>What's News</li>
                <li>Delivery</li>
              </ul>
              <div className='search'>
                <input className=' border-none' />
                <i class=" text-black fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <Link to="/SmallShoppingCart/cart"><i class="shop text-decoration-none fa-solid fa-cart-shopping fs-4"></i></Link>

            <i onClick={Dnav} class= "fs-2 fa-solid fa-bars"></i>

    </nav>
  )
}
