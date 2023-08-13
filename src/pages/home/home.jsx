import { React, useContext } from "react"
import './home.css'
import Test from '../../comenents/testimonial/test'
import z from '../../img/r (1).png'
import z1 from '../../img/r (2).png'
import z2 from '../../img/r (3).png'
import z3 from '../../img/r (4).png'
import z4 from '../../img/r (5).png'


export default function Home() {

  return (
    <main>
        <div class="intro text-center">
            <h1>Select your Dress As </h1>
            <p>I am a web developer and I love to create websites.</p>
            <button>Learn More</button>
        </div>
        
        <div>
          <Test />
        </div>

    </main>
  )
}
