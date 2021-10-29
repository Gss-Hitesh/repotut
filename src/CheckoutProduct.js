import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  link,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const history = useHistory();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const Track = () => {
    // remove the item from the basket
    dispatch({
      type: "Track",
      id: id,
    });

    history.push("/tracker");
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

        <button onClick={Track}>Track !!</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
