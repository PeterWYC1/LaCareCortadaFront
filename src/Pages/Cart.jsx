import React from 'react';
import styles from '../Styles/Cart.module.css';

const cartItems = [
  { title: 'Photo 1', price: '$10', quantity: 1 },
  { title: 'Photo 2', price: '$15', quantity: 2 },
];

function Cart() {
  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>
      <div className={styles.cartList}>
        {cartItems.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            <h2 className={styles.itemTitle}>{item.title}</h2>
            <p className={styles.itemPrice}>Price: {item.price}</p>
            <p className={styles.itemQuantity}>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h3>Total: $40</h3>
      </div>
    </div>
  );
}

export default Cart;
