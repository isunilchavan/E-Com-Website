import React, { createContext, useContext, useEffect, useReducer } from "react";
;

const CartContext = createContext();

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.title === newItem.title
      );

      if (existingItem) {
        const updatedCart = state.cartItems.map((item) =>
          item.title === newItem.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cartItems: updatedCart };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      const index = action.payload;
      const updatedCart = [...state.cartItems];
      updatedCart.splice(index, 1);
      return { ...state, cartItems: updatedCart };

      case "SET_TOKEN":
      // Set the user's token in the state
      return { ...state, token: action.payload };


    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add useEffect to handle token storage
  useEffect(() => {
    // Get the token from local storage, if it exists
    const token = localStorage.getItem("token");

    if (token) {
      // Update your context state with the token
      // You can store it in state or a separate token state
      // Example: setToken(token);
    }
  }, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};