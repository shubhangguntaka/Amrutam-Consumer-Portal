// src/pages/Products/ProductDetails.jsx
import React from "react";
import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
import product3 from '../../assets/product-3.png';
import ourexpert from "../../assets/our-expert.png";
import trustvideo from "../../assets/trust-video.png";
import ingredient from "../../assets/ingredient.png";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiArrowRightWideFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const highlights = [
    "Helps with dry, frizzy hair",
    "Restores the scalp & improves hair health",
    "Makes the hair smooth and shiny",
    "Reduces hair fall & damage",
  ];

  const ingredients = [
    {
      title: "Shatavari",
      desc: "Naturally enhances brain and relieves pain",
      image: { ingredient },
    },
    {
      title: "Shatavari",
      desc: "Naturally enhances brain and relieves pain",
      image: { ingredient },
    },
    {
      title: "Shatavari",
      desc: "Naturally enhances brain and relieves pain",
      image: { ingredient },
    },
    {
      title: "Shatavari",
      desc: "Naturally enhances brain and relieves pain",
      image: { ingredient },
    },
  ];

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

  // Current product being displayed
  const currentProduct = {
    id: 1,
    name: 'Amrutam Kuntal Care Hair Spa | Do-it-yourself Hair Treatment',
    image: product1,
    price: '699.00',
    size: '200 ml',
    reviews: 284,
    rating: 5.0
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleAddToCart = (e, product) => {
    e?.stopPropagation();
    addToCart(product);
  };

  const handleMainProductAddToCart = () => {
    addToCart(currentProduct);
  };

  const experts = [1, 2, 3];

  return (
    <div className="flex items-center justify-center bg-[#FFF7E2]">
      <div className="max-w-5xl mx-auto px-5 lg:px-0 pt-8 pb-16 text-[#1d1d1f]">
        {/* ================== PRODUCT SECTION (flex-col / flex-row) ================== */}
        <section className="flex flex-col lg:flex-row gap-10">
          {/* LEFT – main image + thumbnails + rating */}
          <div className="lg:w-[480px] flex-shrink-0 flex flex-col">
            <div className="rounded-[24px] mb-4 overflow-hidden">
              <img
                src={product1}
                alt="Product main"
                className="w-150 h-150 object-cover"
              />
            </div>
            <br />
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`rounded-[18px] overflow-hidden border-2 ${n === 1 ? "border-[#3A3A3A]" : "border-transparent"
                    }`}
                >
                  <img
                    src={product1}
                    alt="Product thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT – product info + beige cards */}
          <div className="flex-1 flex flex-col">
            {/* header */}
            <h1 className="text-[22px] font-bold mb-2 leading-tight text-[#3A3A3A]">
              Amrutam Kuntal Care Hair Spa | Do-it-yourself Hair Treatment
            </h1>
            <div className="mt-4 flex items-center gap-2 text-[11px]">
              <span className="text-[#FFA500] text-base">★★★★★</span>
              <span className="font-bold text-sm text-[#3A3A3A]">5.0</span>
              <span className="text-gray-500">Based on 284 reviews</span>
            </div>
            <p className="text-[22px] font-bold text-[#3A3A3A]">₹699</p>
            <br />
            {/* price + pack options */}
            <div className="flex items-start gap-2 mb-4">
              <div className="flex flex-row items-start gap-2">
                <button className="flex flex-row justify-center items-center px-3 h-7 w-20 bg-[#EAF2EA] border border-[#9DB29D] rounded-xl">
                  <span className="font-['Nunito'] font-medium text-[18px] leading-5 tracking-[-0.01em] text-black">
                    200 ml
                  </span>
                </button>
                <button className="flex flex-row justify-center items-center px-3 h-7 w-20 bg-[#F0F0F0] rounded-xl">
                  <span className="font-['Nunito'] font-medium text-[18px] leading-5 tracking-[-0.01em] text-black">
                    100 ml
                  </span>
                </button>
                <button className="flex flex-row justify-center items-center px-3 h-7 w-20 bg-[#FAFAFA] rounded-xl">
                  <span className="font-['Nunito'] font-medium text-[18px] leading-5 tracking-[-0.01em] text-[#C5C5C5]">
                    Pack of 3
                  </span>
                </button>
              </div>
            </div>
            <br />
            {/* qty + add to cart */}
            <div className="flex gap-3">
              <div className="border border-gray-300 rounded-md text-m w-50 h-10 flex items-center justify-between font-medium">
                <FiMinus className="w-4 h-4 text-gray-600 cursor-pointer" />
                <span>1</span>
                <FiPlus className="w-4 h-4 text-gray-600 cursor-pointer" />
              </div>
              <button onClick={handleMainProductAddToCart} className="flex-1 bg-[#3A643B] text-white text-sm font-semibold rounded-lg py-3 hover:bg-[#2d4f2e]">
                Add to cart
              </button>
            </div>
            <br />
            {/* description */}
            <p className="text-sm leading-[1.6] text-[#666] mb-6">
              Amrutam's Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic marvel filled to the brim with revitalizing herbs and essential oils like Eucalyptus oil, Triphala, Balchhad and Bhringraj.
              These Ayurvedic ingredients when fused together make a potent dollop that nourishes dry and frizzy hair making it soft and bouncy!
              This spa treatment revitalizes the roots, promotes growth, provides shine, coats hair with a moisturizing layer and is the best stress reliever!
            </p>
            <p className="text-sm leading-[1.6] text-[#666] mb-6">It's time to bring spa home and unwind.</p>
            <br />
            {/* Product Highlights */}
            <section className="mt-2">
              <h3 className="text-m font-bold tracking-tight mb-3 text-[#3A3A3A]">
                Product Highlights
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {highlights.map((h) => (
                  <div
                    key={h}
                    className="w-[120px] h-[160px] bg-[#FDEAD2] rounded-[12px] flex-none relative"
                  >
                    <div className="absolute left-3 top-[100px] w-[100px] h-10 flex flex-col items-start gap-[2px]">
                      <span className="w-[110px] h-10 font-['Nunito'] font-bold text-[13px] leading-5 flex items-center tracking-[-0.01em] text-[#2E2F2E]">
                        {h}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <br />
            {/* Key Ingredients */}
            <section className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-m font-bold tracking-tight text-[#3A3A3A]">
                  Key Ingredients
                </h3>
                <button 
                  onClick={() => navigate('/ingredients')}
                  className="text-sm text-[#3A643B] font-bold no-underline hover:underline"
                >
                  View all ingredients
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ingredients.map((ing, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FDEAD2] h-[80px] w-full m-[10px] rounded-[14px] px-4 py-4 flex items-center gap-3 text-xs"
                  >
                    <div className="h-12 w-12 flex-shrink-0">
                      <img src={ingredient} alt="Ingredient" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-['Nunito'] font-bold text-[14px] leading-6 text-[#2E3F2E] mb-2">
                        {ing.title}
                      </p>
                      <p className="font-['Nunito'] text-[12px] leading-5 text-[#6B6B6B]">
                        {ing.desc}
                      </p>
                    </div>
                    <RiArrowRightWideFill className="text-[#3A643B] text-2xl flex-shrink-0" />
                  </div>
                ))}
              </div>
            </section>
            <br />
            {/* How to use / General Instructions / FAQs */}
            <section className="mt-6 space-y-3 leading-[1.6]">
              <p className="font-bold mb-2 text-m text-[#3A3A3A]">
                How to use
              </p>
              <div className="flex flex-col justify-center w-full h-[80px] bg-[#FDEAD2] rounded-[12px]">
                <p className="font-['Nunito'] text-[14px] flex items-start gap-3 leading-5">
                  Mix one or two tablespoons of Herbal Child Care Malt with milk
                  or 100–200ml warm water and then consume twice a day or
                  consult our Ayurvedic Expert to find the right Ayurvedic
                  recipe for you.
                </p>
              </div>
              <br />
              <p className="font-bold mb-2 text-m text-[#3A3A3A]">
                General Instructions
              </p>
              <div className="flex flex-col items-start justify-center w-full h-[60px] bg-[#FDEAD2] rounded-[12px]">
                <p className="font-['Nunito'] text-[14px] leading-5">
                  Store in a cool and dry place away from direct sunlight. Not
                  advisable for diabetic patients.
                </p>
              </div>
              <br />
              <p className="font-bold text-m mb-4 text-[#3A3A3A]">
                Commonly Asked Questions
              </p>

              <div className="bg-[#FDEAD2] rounded-[12px] px-5 py-5 mb-4">
                <p className="font-['Poppins'] w-[95%] font-semibold text-sm leading-6 mb-3 text-[#3A3A3A]">
                  Who should be using Amrutam Child Care Malt | Herbal Supplement for Child Care
                </p>
                <p className="font-['Poppins'] w-[95%] font-normal text-sm leading-6 text-[rgba(26,26,26,0.8)]">
                  This product is ideal for growing babies and kids to nurture their health in a holistic manner.
                </p>
              </div>
              <br />
              <div className="bg-[#FDEAD2] rounded-[12px] px-5 py-5">
                <p className="font-['Poppins'] w-[95%] font-semibold text-sm leading-6 mb-3 text-[#3A3A3A]">
                  Why choose Amrutam Child Care Malt | Herbal Supplement for Child Care
                </p>
                <div className="font-['Poppins'] w-[95%] font-normal text-sm leading-6 text-[rgba(26,26,26,0.8)] space-y-2">
                  <p>Amrutam's Child Care Malt helps improve immunity and is useful in enhancing vitality and vigor in children.</p>
                  <p>This 100% natural Ayurvedic jam is extremely effective in fighting chronic diseases.</p>
                  <p>Giving your little one Amrutam's Child Care Malt daily will help them improve their appetite and digestion.</p>
                  <p>It is useful in treating anemia, general debility and maintaining a healthy weight.</p>
                  <p className="font-semibold mt-3">100% Natural and Ayurvedic</p>
                  <p>PETA certified cruelty-free</p>
                  <p>Hand-picked and ethically sourced ingredients</p>
                  <p>AYUSH certified and US FDA approved</p>
                </div>
              </div>
            </section>
            <br />
            {/* Featured video */}
            <section className="mt-6 mb-4">
              <p className="font-bold text-m mb-4 text-[#3A3A3A]">
                Trust the Vedas
              </p>
              <div className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-[20px] overflow-hidden w-full max-w-md">
                <img
                  src={trustvideo}
                  alt="Featured video"
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>
          </div>
        </section>
        <br />
        {/* ================== REVIEWS & RATINGS ================== */}
        <section className="mt-10">
          <h3 className="text-[22px] font-bold text-center mb-6 text-[#3A3A3A]">
            Reviews and Ratings
          </h3>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
            <div className="bg-[#FDEAD2] h-[80px] rounded-[12px] px-6 py-5 flex items-center gap-5 w-full md:w-auto">
              <div className="text-3xl font-bold text-[#3A3A3A]">5.0</div>
              <div className="flex flex-col text-xs">
                <span className="text-[#FFA500] text-lg mb-1">★★★★★</span>
                <span className="text-[#666] text-[11px]">
                  Based on 20 reviews
                </span>
              </div>
            </div>

            <div className="flex gap-3 text-[11px]">
              <button className="h-[40px] w-[120px] rounded-[4px] px-5 py-2.5 font-semibold hover:border-2 border-[#3A643B] shadow-md">
                See more reviews
              </button>
              <button className="h-[40px] w-[120px] rounded-[4px] px-5 py-2.5 font-semibold hover:border-2 border-[#3A643B] shadow-md">
                Write a review
              </button>
            </div>
          </div>
          <br />
          <div className="space-y-3 text-xs">
            <div className="bg-[#FDEAD2] rounded-[20px] px-5 py-4 flex gap-4">
              <div className="mt-1 h-12 w-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-lg flex-shrink-0">
                😊
              </div>
              <div className="flex-1">
                <p className="mb-2 text-[11px] text-[#3A3A3A] leading-[1.6]">
                  Might be bit early to confirm but yes I can see noticeable difference in my hairfall, will write again after using it for longer periods
                </p>
                <div className="flex items-center gap-2 text-[10px] text-[#666]">
                  <span className="font-semibold">Sabarishi J</span>
                  <span>•</span>
                  <span>20 January 2023</span>
                  <span className="text-[#FFA500] text-sm ml-auto">
                    ★★★★★
                  </span>
                </div>
              </div>
            </div>
            <br />
            <div className="bg-[#FDEAD2] rounded-[20px] px-5 py-4 flex gap-4">
              <div className="mt-1 h-12 w-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-lg flex-shrink-0">
                😊
              </div>
              <div className="flex-1">
                <p className="mb-2 text-[11px] text-[#3A3A3A] leading-[1.6]">
                  Might be bit early to confirm but yes I can see noticeable difference in my hairfall, will write again after using it for longer periods
                </p>
                <div className="flex items-center gap-2 text-[10px] text-[#666]">
                  <span className="font-semibold">Sabarishi J</span>
                  <span>•</span>
                  <span>20 January 2023</span>
                  <span className="text-[#FFA500] text-sm ml-auto">
                    ★★★★★
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        {/* ================== PEOPLE ALSO BOUGHT ================== */}
        <section className="mt-12">
          <h3 className="text-[22px] text-center font-bold mb-6 text-[#3A3A3A]">
            People have also bought
          </h3>
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
        </section>
        <br />
        {/* ================== MEET OUR EXPERTS ================== */}
        <section className="mt-12 pb-8">
          <h3 className="text-[22px] font-bold text-center mb-8 text-[#3A3A3A]">
            Meet our Experts
          </h3>

          <div className="flex items-center justify-between mb-6">
            <button className="h-10 w-10 rounded-full border-2 border-[#3A3A3A] flex items-center justify-center text-lg cursor-pointer flex-shrink-0">
              <TiArrowLeft />
            </button>

            <div className="flex-1 flex justify-center gap-6 overflow-x-auto">
              {experts.map((id) => (
                <div
                  key={id}
                  className="w-56 h-60 bg-[#F5E6D3] rounded-[30px] flex flex-col overflow-hidden flex-shrink-0"
                >
                  <div className="h-36 flex items-center justify-center pt-4">
                    <div className="h-20 w-20 rounded-full bg-gray-200 border-4 border-white overflow-hidden">
                      <img
                        src={ourexpert}
                        alt="Expert"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="px-5 py-5 text-[11px] text-center space-y-2">
                    <div className="flex items-center justify-center gap-1">
                      <p className="font-bold text-[13px] text-[#3A3A3A]">
                        Dr. Vaishali Sharma
                      </p>
                      <span className="text-[#FFA500] text-xs">★</span>
                    </div>
                    <p className="text-[#666] text-[10px] font-medium">
                      Ayurveda Practitioner (BAMS, MD)
                    </p>
                    <p className="text-[#666] text-[10px]">
                      25 years of experience
                    </p>
                    <div className="flex items-center justify-center gap-1 pt-1">
                      <span className="text-sm">🌿</span>
                      <span className="text-[10px] text-[#666]">
                        Skin Specialist
                      </span>
                    </div>
                  </div>
                  <button className="mt-auto h-10 w-full bg-[#3A643B] text-white text-[12px] font-semibold py-3 hover:bg-[#2d4f2e]">
                    Book a session
                  </button>
                </div>
              ))}
            </div>

            <button className="h-10 w-10 rounded-full border-2 border-[#3A3A3A] flex items-center justify-center text-lg cursor-pointer flex-shrink-0">
              <TiArrowRight />
            </button>
          </div>
          <br />
          <div className="flex justify-center gap-2 mb-6">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3A643B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          </div>
          <br />
          <div className="flex justify-center">
            <button className="h-[40px] w-[200px] rounded-[4px] bg-[#DBE3DC39] px-5 py-2.5 font-semibold border-2 border-[#3A643B] shadow-md">
              <span className="text-base">Find more experts ›</span>
            </button>
          </div>
          <br />
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
