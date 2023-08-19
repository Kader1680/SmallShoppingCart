import React, {useContext} from 'react'
import './form.scss'
import { Link } from 'react-scroll';
 import { ThemeContext } from '../../App';
export default function Login() {

  const dark = useContext(ThemeContext)


  return (
    <div>


    <div class="formbold-main-wrapper" style={{ backgroundColor: dark ? "black": "white"} }>

  <div class="formbold-form-wrapper">
    <form style={ {padding: "10px 17px"}} action="/" method="POST">
        <div class="formbold-input-flex">
          <div>
              <label style={{ color: dark ? "white": "#07074D" }} for="firstname" class="formbold-form-label"> First name </label>
              <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Jane"
              class="formbold-form-input"
              />
          </div>
          <div>
              <label style={{ color: dark ? "white": "#07074D" }} for="lastname" class="formbold-form-label"> Last name </label>
              <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Cooper"
              class="formbold-form-input"
              />
          </div>
        </div>

        <div class="formbold-input-flex">
          <div>
              <label style={{ color: dark ? "white": "#07074D" }} for="email" class="formbold-form-label"> Mail </label>
              <input
              type="email"
              name="email"
              id="email"
              placeholder="jhon@mail.com"
              class="formbold-form-input"
              />
          </div>
          <div>
              <label style={{ color: dark ? "white": "#07074D" }} for="phone" class="formbold-form-label"> Phone </label>
              <input
              type="text"
              name="phone"
              id="phone"
              placeholder="(319) 555-0115"
              class="formbold-form-input"
              />
          </div>
        </div>

        

        <div>
            <label style={{ color: dark ? "white": "#07074D" }} for="message" class="formbold-form-label"> Message </label>
            <textarea
                rows="6"
                name="message"
                id="message"
                placeholder="Type your message"
                class="formbold-form-input"
            ></textarea>
        </div>

        <button style={{ backgroundColor: dark ? "black": "black", color: dark ? "white": "white"}} class="formbold-btn">
            Send Message
        </button>
        

    </form>
  </div>
  </div>
  </div>
    
  )
}





