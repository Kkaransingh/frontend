import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ id, title, image, description }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = {
      id,
      title,
      image,
      price: calculatePriceBasedOnProduct(id),
      quantity: 1,
    };
    addToCart(product);
    console.log('Product added to cart:', product); // Debugging
  };

  const calculatePriceBasedOnProduct = (productId) => {
    // Replace with actual price calculation logic
    switch (productId) {
      case 'Smart TV':
        return 499.99;
      case 'Men\'s Jacket':
        return 89.99;
      // Add other cases as needed
      default:
        return 0;
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow-md px-6 py-4 flex flex-col items-center justify-center hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md text-lg font-semibold transition duration-300"
          onClick={() => alert('Implement functionality to view product details')}
        >
          View Product
        </button>
        <button
          className="ml-4 bg-red-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md text-lg font-semibold transition duration-300"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
