import { createContext, useReducer } from 'react';

// call createContext and set it to Store
export const Store = createContext();

// initialState set it to object and inside that object define cart and for cart defining an object to empty array
const initialState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD-ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // inside state we have cart and cart items
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
