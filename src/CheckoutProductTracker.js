/* import React from "react";
import "./CheckoutProductTracker.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";


function CheckoutProductTracker({
  id,
  image,
  title,
  price,
  rating,
  link,
  hideButton,
}) {
  const [{ basket1 }, dispatch] = useStateValue();
  const history = useHistory() ;


  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_TBASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}

        <div className="tracker__container">
          <img src={link}></img>
          <div className="input__price">
            <strong className="text_p">Desired Price</strong>
            <input className="tracker__searchItem" type="text" />
          </div>
          <div className="input__price">
            <strong className="text_p">Minimum Price</strong>
            <input className="tracker__searchItem" type="text" />
          </div>
          <button onClick={e => history.push('/')}>Start Tracking !!</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProductTracker;
 */

import React, { useState } from "react";
import "./CheckoutProductTracker.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import Popup from "./PopUp";

function CheckoutProductTracker({
  id,
  image,
  title,
  price,
  rating,
  link,
  hideButton,
}) {
  const [{ basket1 }, dispatch] = useStateValue();
  const history = useHistory();
  const [DP, setDP] = useState("");
  const [MP, setMP] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [check, setIsCheck] = useState(false);

  const togglePopup = () => {
    DP >= price || MP >= price ? setIsOpen(!isOpen) : setIsOpen(isOpen);
    setIsCheck(true);
  };

  const closed = () => {
    history.push("/");
  };

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_TBASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}

        <div className="tracker__container">
          <img src={link}></img>
          <div className="input__price">
            <strong className="text_p">Desired Price</strong>
            <input
              className="tracker__searchItem"
              type="text"
              value={DP}
              onChange={(e) => setDP(e.target.value)}
            />
          </div>
          <div className="input__price">
            <strong className="text_p">Minimum Price</strong>
            <input
              className="tracker__searchItem"
              type="text"
              value={MP}
              onChange={(e) => setMP(e.target.value)}
            />
          </div>

          {/* <button onClick={ togglePopup (), (e) => history.push("/")}>Start Tracking !!</button> */}
          <button onClick={togglePopup}>Start Tracking !!</button>
          <div>
            {isOpen && (
              <Popup
                content={
                  <>
                    <h1>
                      <strong>You can Buy Your Product At </strong>
                    </h1>
                    <h2>Price :{price}</h2>
                  </>
                }
                handleClose={closed}
              />
            )}
            {!isOpen && check && (
              <Popup
                content={
                  <>
                    <h1>
                      <strong>We Will Nofity You</strong>
                    </h1>
                    <h2>Whenever Price Droped</h2>
                  </>
                }
                handleClose={closed}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProductTracker; /*


import React,{useState} from "react"; 
import Popup from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default App; */
