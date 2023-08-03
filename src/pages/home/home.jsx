import React from 'react'
import './home.css'
import Test from '../../comenents/testimonial/test'

export default function Home() {
  return (
    <main>
        <div class="intro text-center">
            <h1>Select your Dress As Men</h1>
            <p>I am a web developer and I love to create websites.</p>
            <button>Learn More</button>
        </div>
        <div className='mt-5 mb-5 text-center'>
            <h1>Ower Testimonial</h1>
        </div>
        <Test/>

    </main>
  )
}
