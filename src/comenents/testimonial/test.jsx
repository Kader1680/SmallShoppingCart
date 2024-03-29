import React, {useContext, useEffect} from 'react'
import './test.css'
import Aos from 'aos'
// import 'aos/dist/aos'
import 'aos/dist/aos.css'
import Head from '../Head';

import { ThemeContext } from '../../App';
export default function Test() {

  const dark = useContext(ThemeContext)

   useEffect(() => {
         Aos.init({duration: 3000 });
   }, []);

  
  return (
    <div style={{ paddingTop:"5rem", backgroundColor : dark ? "black" : "white" }} >
     <Head style={ {color : dark ? "white" : 'black' }}   />
   <div style={ {color : dark ? "white" : 'black' }}  data-aos='fade-up' className='wrape container' > 
      <figure class="snip1390">
   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" class="profile" />
   <figcaption>
     <h2>Eleanor Crisp</h2>
     <h4>Favorite Buyer</h4>
     <blockquote>Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!</blockquote>
   </figcaption>
 </figure>
 <figure class="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" class="profile" />
   <figcaption>
     <h2>Gordon Norman</h2>
     <h4>Models</h4>
     <blockquote>Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I think my cerebellum has just fused. </blockquote>
   </figcaption>
 </figure>
 <figure class="snip1390"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="profile" />
   <figcaption>
     <h2>Sue Shei</h2>
     <h4>Public Relations</h4>
     <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</blockquote>
   </figcaption>
 </figure>
   </div>
    </div>
  )
}
