import { React } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./comenents/navbar"
import Cart from "./pages/cart/cart";
import Shopping from "./pages/shopping/shopping";
// import ShopContext from "./context/ShopContext";

import ShopContextProvider from "./context/ShopContext"
export  function App() {
  return (
    <div className="App">
      <ShopContextProvider>
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Shopping/>} />
                  
                  <Route path="/cart" element={<Cart/>} />
              </Routes>
          </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
