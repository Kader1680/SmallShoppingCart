import { React } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./comenents/navbar"
import Cart from "./pages/cart/cart";
import Test from "./comenents/testimonial/test";
import Shopping from "./pages/shopping/shopping";
import "./App.css"
import FormExample from "./comenents/login"
// import ShopContext from "./context/ShopContext";

import ShopContextProvider from "./context/ShopContext"
import SliderImg from "./comenents/SliderImg";
import Login from "./pages/login/form";
export  function App() {
  return (
    <div className="App">
      <ShopContextProvider>
          <Router>
              <Navbar />
              {/* <SliderImg /> */}
              <Routes>
                  <Route path="/SmallShoppingCart" element={<Shopping/>} />
                  <Route path="/SmallShoppingCart/login" element={<Login />} />
                  
                  <Route path="/SmallShoppingCart/cart" element={<Cart/>} />
                  
              </Routes>
              <Test/>

          </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
