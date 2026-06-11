import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cart, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCart();
  
  if (cart.length === 0) {
    return (
      <div>
        <h2>Your Cart</h2>
        <p>Cart is empty</p>
      </div>
    );
  }
  
  return (
    <div>
      <h2>Your Cart ({getTotalItems()} items)</h2>
      <div>
        {cart.map(item => (
          <div key={item.id} style={{ 
            border: '1px solid #ddd', 
            margin: '10px 0', 
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>{item.name}</strong> - ${item.price}
            </div>
            
            <div>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                style={{ margin: '0 5px' }}
              >
                -
              </button>
              <span style={{ margin: '0 10px' }}>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                style={{ margin: '0 5px' }}
              >
                +
              </button>
              <button 
                onClick={() => removeItem(item.id)}
                style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
              >
                Remove
              </button>
            </div>
            
            <div>
              ${item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
}

export default Cart;