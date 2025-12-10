import React from 'react';
import { useCart } from '../../context/CartContext';

const CartNotification = () => {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-in">
      <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
        <svg 
          className="w-7 h-7" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 26 26"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 13l4 4L19 7" 
          />
        </svg>
        <span className="font-medium">{notification}</span>
      </div>
    </div>
  );
};

export default CartNotification;
