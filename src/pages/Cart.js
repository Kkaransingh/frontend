import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext'; // Adjust path as per your project structure
import CartItem from '../components/CartItem'; // Assuming you have implemented CartItem

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="mt-6 flex justify-between items-center">
              <button
                className="text-sm text-gray-600 hover:text-red-500"
                onClick={() => alert('Implement functionality to proceed to checkout')}
              >
                Proceed to Checkout
              </button>
              <span className="text-lg font-semibold text-gray-800">
                Grand Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
