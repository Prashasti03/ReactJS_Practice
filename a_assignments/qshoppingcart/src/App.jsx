import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart.jsx';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>My Shopping Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;