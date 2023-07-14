import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import './slide.css'
import slid1 from "../img/slid-1.jpg"
import slid2 from "../img/slid-2.jpg"
import slid3 from "../img/slid-3.jpg"
import { Slide } from 'react-slideshow-image'
const images = [
    slid1,
    slid2,
    slid3,
];
export default function SliderImg() {
  return (
    <Slide>
            <div className="each-slide-effect">
                <div style={{'backgroundImage': `url(${images[0]})`}}></div>
            </div>
            <div className="each-slide-effect">
                <div style={{'backgroundImage': `url(${images[1]})`}}></div>
            </div>
            <div className="each-slide-effect">
                <div style={{'backgroundImage': `url(${images[2]})`}}></div>
            </div>
    </Slide>
  )
}
