'use client';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const {
    cart,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Your Cart</h2>
      <div className="row justify-content-center">
        {/* Cart items list */}
        <ul className="col-12 col-md-7 list-unstyled">
          {cart.map((item) => (
            <li
              key={item.id}
              className="d-flex align-items-center border rounded p-3 mb-3 bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="me-3 rounded"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <div className="flex-grow-1">
                <h4 className="mb-1">{item.name}</h4>
                <p className="mb-1">Price: ₹{item.price?.toFixed(2) ?? '0.00'}</p>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span>Qty: {item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>
                <p className="mb-0">
                  Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                className="btn btn-danger btn-sm ms-3"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        {/* Bill / summary */}
       <div className="col-12 col-md-4 bg-light rounded p-4 shadow-sm">
  <p>
    <strong>Total items:</strong> {getTotalItems()}
  </p>
  <p>
    <strong>Subtotal:</strong> ₹{getTotalPrice().toFixed(2)}
  </p>
  <p>
    <strong>Discount (10%):</strong> -₹{(getTotalPrice() * 0.10).toFixed(2)}
  </p>
  <p>
    <strong>Delivery Fee:</strong> ₹50.00
  </p>
  <hr />
  <p className="fw-bold fs-5">
    Final Bill: ₹
    {(getTotalPrice() * 0.90 + 50).toFixed(2)}
  </p>

  <button className="btn btn-outline-danger w-100 mb-2" onClick={clearCart}>
    Clear Cart
  </button>
  <button className="btn btn-primary w-100">
    Checkout
  </button>
</div>

      </div>
    </div>
  );
}

export default Cart;
