import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className='text-white p-4 bg-danger d-flex justify-content-around  align-items-center'>
            
            <h4>
              <Link to="/">shopping cart</Link>
            </h4>
            
            <Link to="/cart"><i class="fa-solid fa-cart-shopping fs-4"></i></Link>
        </nav>
    </div>
  )
}
