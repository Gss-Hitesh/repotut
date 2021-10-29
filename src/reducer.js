export const initialState = {
  basket: [],
  user: null,
  basketT: [],
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "REMOVE_FROM_TBASKET":
      const index2 = state.basketT.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket2 = [...state.basketT];

      if (index2 >= 0) {
        newBasket2.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basketT: newBasket2,
      };

    case "Track":
      const index1 = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket1 = [...state.basket];
      let tBasket;

      if (index1 >= 0) {
        tBasket = newBasket1.splice(index1, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket1,
        basketT: tBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
