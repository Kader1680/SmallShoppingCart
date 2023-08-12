import React from 'react'
import z from '../img/r (1).png'
import z1 from '../img/r (2).png'
import z2 from '../img/r (3).png'
import z3 from '../img/r (4).png'
import z4 from '../img/r (5).png'
const Head = () => {
  return (
    <div style={{color:"#0a0d35", margin: "25px 0px 50px 0px" }} className='text-center ms-4 me-4'>
    <h1 style={ {  textDecoration:"underline " }} >Ower Testimonial</h1>
    <p style={ { textAlign:"center", Width: "200px" }}> Lorem ipsum is a placeholder text commonly used to demonstrate
    Lorem ipsum is a placeholder text commonly used to demonstrate
    </p>
    <div class="">
      <img  width={"50px"} src={z} />
      <img style={{ marginLeft:"8px" }} width={"50px"} src={z1} />
      <img style={{ marginLeft:"8px" }} width={"50px"} src={z2} />
      <img style={{ marginLeft:"8px" }} width={"50px"} src={z3} />
      <img style={{ marginLeft:"8px" }} width={"50px"} src={z4} />
    </div>
</div>
  )
}

export default Head