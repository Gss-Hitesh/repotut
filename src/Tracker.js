import React, { useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import CheckoutProductTracker from "./CheckoutProductTracker";
import { useStateValue } from "./StateProvider";

function Tracker() {
  const [{ basket, user, basketT }, dispatch] = useStateValue();

  return (
    <div>
      <div>
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout__title">Your Tracking Basket</h2>
        <div className="payment__items">
          {basketT.map((item) => (
            <CheckoutProductTracker
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tracker;
