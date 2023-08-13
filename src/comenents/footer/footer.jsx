import React, { useContext } from 'react'
import './footer.css'


import {ThemeContext} from "../../App"


export default function Footer() {
  const dark = useContext(ThemeContext)

  return (
    <div>
       <footer class="section bg-footer " style={ { backgroundColor: dark ? "black" : "#0a0d35 "}} >
       <div class="container">
<div class="row">
<div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
  <div class="">
    <h6 class="footer-heading text-uppercase text-white">Information</h6>
    <ul class="list-unstyled footer-link mt-4">
    <li><a href="">Pages</a></li>
    <li><a href="">Our Team</a></li>
    <li><a href="">Feuchers</a></li>
    <li><a href="">Pricing</a></li>
    </ul>
  </div>
</div>
<div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
<div class="">
<h6 class="footer-heading text-uppercase text-white">Ressources</h6>
<ul class="list-unstyled footer-link mt-4">
<li><a href="">Monitoring Grader </a></li>
<li><a href="">Video Tutorial</a></li>
<li><a href="">Term &amp; Service</a></li>
<li><a href="">Zeeko API</a></li>
</ul>
</div>
</div>
<div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
<div class="">
<h6 class="footer-heading text-uppercase text-white">Help</h6>
<ul class="list-unstyled footer-link mt-4">
<li><a href="">Sign Up </a></li>
<li><a href="">Login</a></li>
<li><a href="">Terms of Services</a></li>
<li><a href="">Privacy Policy</a></li>
</ul>
</div>
</div>
<div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
<div class="">
<h6 class="footer-heading text-uppercase text-white">Contact Us</h6>
<p class="contact-info mt-4">Contact us if need help withanything</p>
<p class="contact-info">+01 123-456-7890</p>

</div>
</div>
</div>
</div>
<div class="text-center mt-5">
<p class="footer-alt mb-0 f-14">2023 © Anup, Develop BY ABDELKADER OULD HENNIA</p>
</div>
        </footer>
    </div>
  )
}
