import React, { createContext } from 'react'
// create context like store
export const ShoppingConst = createContext(null)
import {PRODUCTS} from "../product"
// Get cart item 

function GetCartDefault() {
  // create object of cart
  const cart = {};

  // get all production and loop of them than stoked in cart 

  // i = 1 because id srat with 1 
  for (let index = 1; index < PRODUCTS.length + 1; index++) {
    // initialize every item with value 0 before add (increase)
    cart[i] = 0
  }

  return cart;
}

export default function ShopContext(props) {
  // caet items ==> all your products
  const [cartItems, setcartItems] = useState(GetCartDefault()) 
  // cartItems in usestate by default it's 0 that the function GetCartDefault retur<nav class="navbar navbar-expand-lg navbar-light bg-light">
  // in button you see (0)
  // make some OPERATION TO CART LIKE ADD/REMOVE AND VALUE THAT WILL CHANGE FROM (0)
  // ----------------------
  // create fucntion that modify 0 value to 1/2/3

  const AddCart = (id_of_item) => {
    setcartItems(
      // pervious_value_of_state == (0)
      // the function setcartItems ==> will change this value by increase '+' or decrease '-'
      // this fucntion that will return object of privousvlaue ...previous value (0) in all product
      (pervious_value_of_state)=>({...pervious_value_of_state, [id_of_item]: pervious_value_of_state[id_of_item] + 1})
      //                                      0                   1            the prodcut 1 will change (1)(2)(3)(4)
      //                                      0                   2            the prodcut 2 will change (1)(2)(3)(4)
      //                                      0                   3            the prodcut 3 will change (1)(2)(3)(4)
      //                                      0                   4            the prodcut 4 will change (1)(2)(3)(4)
      //                                      0                   5            the prodcut 5 will change (1)(2)(3)(4)
      //                                      0                   6            the prodcut 6 will change (1)(2)(3)(4)
    )
  }

    const RemoveCart = (id_of_item) => {
      setcartItems(
        // pervious_value_of_state == (0)
        // the function setcartItems ==> will change this value by increase '+' or decrease '-'
        // this fucntion that will return object of privousvlaue ...previous value (0) in all product
        (pervious_value_of_state)=>({...pervious_value_of_state, [id_of_item]: pervious_value_of_state[id_of_item] - 1})
        //                                      0                   
      )
  }
  // create context value and put 3 value as object ==> caretitems by (0) default + addcart + remove

  const contextvalue = {cartItems, AddCart, RemoveCart}
  return(
    
        
    <div>
      
    
      <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>
    </div>
  )
}
