import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const { id, title, image, price, quantity } = item;

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <img src={image} alt={title} className="w-16 h-16 object-cover rounded-md mr-4" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">Price: ${price.toFixed(2)}</p>
        <p className="text-gray-600">Quantity: {quantity}</p>
      </div>
      <button
        onClick={() => removeFromCart(id)}
        className="text-red-500 font-medium hover:text-red-600 focus:outline-none"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
