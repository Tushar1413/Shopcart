// 

import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Payment from "./Payment";
import Orders from "./Orders";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Swal from "sweetalert2";

// const promise = loadStripe(
//   "pk_test_51N4j3iSEJFE6uX4uaDJLGr8oYIc3sSLSuvoaicxxXkcDBjxZy6oekxfRIEiBfF7tpsja5BG8KmW11wAb4cB4zksj00PCYfyylK"
// );
function App() {
  const [{ basket }, dispatch] = useStateValue();
  const [open,setopen]=useState(1);
  const alert = () => {
    if(open===1)
    {
      Swal.fire("PLEASE LOGIN OR CREATE NEW ACCOUNT BEFORE ADDING ITEMS TO CART");
      setopen(2);
    }
  };

  useEffect(() => {
    // when login, will check the previous recorded data
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);

      if (authUser) {
        //just logged in
        
        dispatch({ // to fetch data
          type: "SET",
          user: authUser,
        });
      } else {
        // if logegd out or new sign up
        dispatch({
          type: "SET",
          user: null,
        });
      }
    });
  }, []);

  return (
// path redirection is done by router
    <Router> 
      {alert()}
      
      <div className="app">
        <Header />
        <Routes>
          {/* re direct to login.js */}
          <Route path="/login" element={[<Login />]} /> 

          {/* re direct to checkout.js */}
          <Route path="/checkout" element={[<Checkout />]} />

          {/* re direct to payment.js */}
          <Route
            path="/payment"
            element={[
              // used to check the generated key for payment.
              <Elements stripe={promise}> 
                <Payment />
              </Elements>,
            ]}
          />

          <Route path="/payment" element={[<Payment />]} />
          {/* re direct to order.js */}
          <Route path="/orders" element={[<Orders />]} /> 
          {/* re direct to home.js */}
          <Route path="/" element={[<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}
// function end
export default App;
