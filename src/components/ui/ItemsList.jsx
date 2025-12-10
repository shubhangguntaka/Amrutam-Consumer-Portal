import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import product1 from '../../assets/product-1.png';
import product2 from '../../assets/product-2.png';
import product3 from '../../assets/product-3.png';

function ItemsList() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment',
      image: product1,
      price: '649.00',
      size: '200 ml',
      reviews: 52,
      rating: 5.0
    },
    {
      id: 2,
      name: 'Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair',
      image: product2,
      price: '649.00',
      size: '200 ml',
      reviews: 52,
      rating: 5.0
    },
    {
      id: 3,
      name: 'Amrutam Nari Sondarya Malt | Complete Care For Women\'s Health And Beauty',
      image: product3,
      price: '649.00',
      size: '200 ml',
      reviews: 52,
      rating: 5.0
    }
  ];

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="relative flex flex-col items-center bottom-[50px]">
      <div className="flex gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="w-[370px] flex flex-col cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            {/* Product Image */}
            <div className="w-full h-[460px] rounded-[14px] overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-[6px] flex-1 pr-3">
                {/* Product Name */}
                <h3 className="font-['Poppins'] font-medium text-[15px] leading-[22px] tracking-[-0.01em] text-[#2E2F2E]">
                  {product.name}
                </h3>

                {/* Price and Size */}
                <div className="flex items-center justify-start gap-1">
                  <span className="font-['Poppins'] font-normal text-[14px] leading-5 tracking-[-0.01em] text-[#2E2F2E]">
                    ₹ {product.price}
                  </span>
                  <span className="text-[#2E2F2E]">•</span>
                  <span className="font-['Poppins'] font-normal text-[14px] leading-5 tracking-[-0.01em] text-[#2E2F2E]">
                    {product.size}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-start gap-1">
                  <div className="flex items-center gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="#F79420">
                        <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.4 3 10l.6-3.2L1.2 4.5l3.3-.5L6 1z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-['Poppins'] font-normal text-[13px] leading-4 tracking-[-0.01em] text-[#2E2F2E]">
                    ({product.reviews})
                  </span>
                </div>
              </div>

              {/* Add Button */}
              <button 
                onClick={(e) => handleAddToCart(e, product)}
                className="w-[32px] h-[32px] bg-[#3A643B] rounded-[8px] flex items-center justify-center hover:bg-[#2e4f2f] transition-colors flex-shrink-0"
              >
                <FaPlus className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrow */}
      <button className="absolute right-14 top-1/2 -translate-y-1/2 w-[56px] h-[56px] bg-white border border-[#BCBCBC] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A5A5A5" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export default ItemsList;