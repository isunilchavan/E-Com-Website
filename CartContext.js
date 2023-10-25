
import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.title === newItem.title
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cartItems];
        updatedCart[existingItemIndex].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { ...state, cartItems: updatedCart };
      } else {
        const updatedCart = [...state.cartItems, { ...newItem, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { ...state, cartItems: updatedCart };
      }

    case "REMOVE_FROM_CART":
      const index = action.payload;
      const updatedCart = [...state.cartItems];
      updatedCart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cartItems: updatedCart };

    case "CLEAR_CART":
      localStorage.removeItem("cart");
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart data from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      dispatch({ type: "SET_CART", payload: storedCart });
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
