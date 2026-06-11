import React from 'react';
import { useCart } from './CartContext';
// Sample products
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 29 },
  { id: 3, name: 'Keyboard', price: 79 },
  { id: 4, name: 'Monitor', price: 299 }
];
function ProductList() {
  const { addItem } = useCart();
  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addItem(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;