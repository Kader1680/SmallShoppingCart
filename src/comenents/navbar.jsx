import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./navbar.css"
export default function Navbar() {
  return (
    <nav className='text-white p-4 d-flex justify-content-around  align-items-center'>
            
            <h4>
              <Link class="text-white text-decoration-none" to="/SmallShoppingCart">shopping cart</Link>
            </h4>
            
            <Link to="/SmallShoppingCart/cart"><i class="text-white text-decoration-none fa-solid fa-cart-shopping fs-4"></i></Link>
    </nav>
  )
}
