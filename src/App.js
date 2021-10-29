import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Tracker from "./Tracker";

const promise = loadStripe(
  "pk_test_51JoIJASEA7yBMYkFDHJr48xNa6E6mHvix1ml26z0chwCkPAI0U9favsOx6b1IcIhiDko8jZhcva3CMKwa06Jn2tV00M5VJnzqo"
);  //public key


//sk_test_51JoIJASEA7yBMYkF3cGWcwHjUInkpPwwRZbjDUqs4H4aLJ9tBsCqtODhf4PAyQPQIVV0s4QgQwqG2HKcTz2vP8zM00108iw303  secret key
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } 
      else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/tracker">
            <Header />
            <Tracker />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <arouselContainer/>
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
