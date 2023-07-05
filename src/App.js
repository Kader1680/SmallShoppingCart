import { React } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./comenents/navbar"
import Cart from "./pages/cart/cart";
import Shopping from "./pages/shopping/shopping";
import "./App.css"
import FormExample from "./comenents/login"
// import ShopContext from "./context/ShopContext";

import ShopContextProvider from "./context/ShopContext"
export  function App() {
  return (
    <div className="App">
      <ShopContextProvider>
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/SmallShoppingCart" element={<Shopping/>} />
                  
                  <Route path="/SmallShoppingCart/cart" element={<Cart/>} />
              </Routes>
          </Router>
      </ShopContextProvider>
      <FormExample/>
    </div>
  );
}

export default App;
