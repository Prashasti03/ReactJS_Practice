import React, { createContext, useReducer, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Reducer function - handles all cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    
    // ADD ITEM to cart
    case 'ADD_ITEM': {
      const existingItem = state.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // If item exists, increase quantity
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new item, add with quantity 1
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }
    
    // REMOVE ITEM from cart
    case 'REMOVE_ITEM': {
      return state.filter(item => item.id !== action.payload);
    }
    
    // UPDATE QUANTITY of an item
    case 'UPDATE_QUANTITY': {
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    }
    
    default:
      return state;
  }
};

// Provider component - wraps your app
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  
  // Helper functions for easier use
  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };
  
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id); // Remove if quantity becomes 0
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };
  
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const value = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    getTotalItems,
    getTotalPrice
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy access to cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};