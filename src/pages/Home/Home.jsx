import { Link } from "react-router-dom";
import Seo from "../../seo/Seo";
import { 
  FiArrowRight, 
  FiStar, 
  FiUsers, 
  FiAward, 
  FiHeart, 
  FiCheck,
  FiPlay,
  FiShield,
  FiTruck,
  FiHeadphones
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

// Categories data with colored backgrounds and gradients
const categories = [
  { id: 1, name: "Hair Care", icon: "💆‍♀️", gradient: "from-orange-100 to-amber-50", iconBg: "bg-orange-200", link: "/products?category=hair" },
  { id: 2, name: "Skin Care", icon: "✨", gradient: "from-yellow-100 to-amber-50", iconBg: "bg-yellow-200", link: "/products?category=skin" },
  { id: 3, name: "Digestion", icon: "🌿", gradient: "from-green-100 to-emerald-50", iconBg: "bg-green-200", link: "/products?category=digestion" },
  { id: 4, name: "Immunity", icon: "🛡️", gradient: "from-blue-100 to-cyan-50", iconBg: "bg-blue-200", link: "/products?category=immunity" },
  { id: 5, name: "Pain Relief", icon: "💪", gradient: "from-red-100 to-orange-50", iconBg: "bg-red-200", link: "/products?category=pain" },
  { id: 6, name: "Women's Health", icon: "🌸", gradient: "from-pink-100 to-rose-50", iconBg: "bg-pink-200", link: "/products?category=womens" },
];

// Featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Kuntal Care Hair Oil",
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    reviews: 2340,
    badge: "Bestseller",
    color: "from-amber-50 to-orange-100",
  },
  {
    id: 2,
    name: "Nari Sondarya Malt",
    price: 449,
    originalPrice: 599,
    rating: 4.7,
    reviews: 1890,
    badge: "New",
    color: "from-rose-50 to-pink-100",
  },
  {
    id: 3,
    name: "Amrutam Gold Malt",
    price: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviews: 3200,
    badge: "Top Rated",
    color: "from-yellow-50 to-amber-100",
  },
  {
    id: 4,
    name: "Lozenge Malt",
    price: 349,
    originalPrice: 449,
    rating: 4.6,
    reviews: 1560,
    badge: null,
    color: "from-green-50 to-emerald-100",
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Verified Buyer",
    location: "Mumbai",
    rating: 5,
    text: "Amrutam's Kuntal Care Oil has transformed my hair completely. After years of hair fall, I finally found something that works!",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Consultation Patient",
    location: "Delhi",
    rating: 5,
    text: "The online consultation was incredibly helpful. The doctor understood my concerns and gave me a personalized treatment plan.",
  },
  {
    id: 3,
    name: "Anjali Patel",
    role: "Regular Customer",
    location: "Bangalore",
    rating: 5,
    text: "I've been using Amrutam products for 6 months now. The quality is exceptional and results are visible!",
  },
];

// Stats data
const stats = [
  { icon: FiUsers, value: "1M+", label: "Happy Customers", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: FiAward, value: "50+", label: "Ayurvedic Products", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: FiHeart, value: "100+", label: "Expert Doctors", color: "text-rose-600", bg: "bg-rose-50" },
  { icon: FiStar, value: "4.8", label: "Average Rating", color: "text-blue-600", bg: "bg-blue-50" },
];

// Why choose us data
const whyChooseUs = [
  {
    icon: FiShield,
    title: "100% Natural",
    description: "Pure, chemical-free Ayurvedic ingredients sourced from trusted suppliers.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: FiAward,
    title: "Ancient Wisdom",
    description: "Time-tested formulations passed down through generations.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: HiOutlineSparkles,
    title: "Scientifically Tested",
    description: "Rigorous quality testing ensures safety and efficacy.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: FiHeadphones,
    title: "Expert Guidance",
    description: "Personalized advice from certified Ayurvedic practitioners.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: FiTruck,
    title: "Fast Delivery",
    description: "Free delivery across India on orders above ₹500.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: FiCheck,
    title: "Quality Assured",
    description: "GMP certified manufacturing ensuring highest standards.",
    gradient: "from-teal-500 to-cyan-600",
  },
];

function Home() {
  return (
    <>
      <Seo
        title="Amrutam - Holistic Wellness & Ayurvedic Products"
        description="Discover authentic Ayurvedic products, book consultations with trusted practitioners, and embrace holistic wellness with Amrutam."
      />
      <p className="text-center">Sample Home Page Content</p>
      {/* Hero Section - Modern Design */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-[#FFF7E2] via-[#FFF9EC] to-[#F0F7E8] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#3A643B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#A47E3B]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#3A643B]/3 to-transparent rounded-full" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-left z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#3A643B]/20 rounded-full px-4 py-2 mb-8 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3A643B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3A643B]"></span>
                </span>
                <span className="text-sm font-medium text-[#3A643B]">
                  India's Most Trusted Ayurvedic Brand
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
                <span className="text-[#3A643B]">Holistic</span>{" "}
                <span className="relative inline-block text-[#3A643B]">
                  Wellness
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="#A47E3B" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#A47E3B] to-[#8B6914] bg-clip-text text-transparent">
                  Rooted in Ayurveda
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                Discover authentic Ayurvedic products crafted with ancient wisdom and modern science. 
                Start your wellness journey today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center gap-3 bg-[#3A643B] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-[#3A643B]/25 hover:shadow-xl hover:shadow-[#3A643B]/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Shop Now 
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/book-consultation"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#3A643B] border-2 border-[#3A643B]/20 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-[#3A643B] hover:bg-[#3A643B]/5 transition-all duration-300"
                >
                  <FiPlay className="w-5 h-5" />
                  Book Consultation
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 border-2 border-white flex items-center justify-center text-sm">
                      👤
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <FiStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">10,000+</span> happy customers
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative lg:pl-8">
              {/* Main Image Container */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-[#C9DBC9] to-[#A8C5A8] rounded-[2.5rem] h-[400px] sm:h-[480px] lg:h-[560px] flex items-center justify-center overflow-hidden shadow-2xl shadow-[#3A643B]/20">
                  {/* Decorative circles */}
                  <div className="absolute top-10 right-10 w-20 h-20 bg-white/20 rounded-full" />
                  <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/10 rounded-full" />
                  
                  <div className="text-center z-10">
                    <div className="text-[120px] sm:text-[140px] leading-none mb-4 drop-shadow-lg">🌿</div>
                    <p className="text-[#2d4e2e] font-medium text-lg">Hero Image</p>
                  </div>
                </div>

                {/* Floating Badge - 100% Natural */}
                <div className="absolute -left-4 sm:left-4 top-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3A643B] to-[#2d4e2e] rounded-xl flex items-center justify-center shadow-lg">
                    <FiAward className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#3A643B]">100% Natural</p>
                    <p className="text-sm text-gray-500">No Chemicals</p>
                  </div>
                </div>

                {/* Floating Badge - Rating */}
                <div className="absolute -right-4 sm:right-4 bottom-20 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float-delayed">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FiStar className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">4.8 Rating</p>
                    <p className="text-sm text-gray-500">10K+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Glassmorphism Design */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 sm:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[#3A643B] font-semibold text-sm uppercase tracking-wider mb-3">
              Browse Categories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of Ayurvedic products designed to address your specific health concerns
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="group relative bg-white rounded-3xl p-6 text-center border border-gray-100 hover:border-[#3A643B]/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${category.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#3A643B] transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-4">
            <div>
              <span className="inline-block text-[#3A643B] font-semibold text-sm uppercase tracking-wider mb-3">
                Our Products
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Featured Products
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-[#3A643B] font-semibold hover:gap-3 transition-all"
            >
              View All Products 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                <div className={`relative h-56 bg-gradient-to-br ${product.color} flex items-center justify-center p-6`}>
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-[#3A643B] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      {product.badge}
                    </span>
                  )}
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-500">🧴</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-[#3A643B] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
                      <FiStar className="w-4 h-4 text-amber-500 fill-current" />
                      <span className="text-sm font-semibold text-amber-700">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400">({product.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#3A643B]">₹{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section - Modern Design */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3A643B] via-[#2d5a2e] to-[#1e3d1f]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-[#A8D5A9] font-semibold text-sm uppercase tracking-wider mb-4">
                Expert Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Consult with Expert<br />
                <span className="text-[#A8D5A9]">Ayurvedic Doctors</span>
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Get personalized treatment plans from certified Ayurvedic practitioners. 
                Book online consultations from the comfort of your home.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "100+ Certified Doctors",
                  "Personalized Plans",
                  "Follow-up Support",
                  "Affordable Fees",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#A8D5A9] rounded-full flex items-center justify-center shrink-0">
                      <FiCheck className="w-4 h-4 text-[#3A643B]" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/book-consultation"
                className="group inline-flex items-center gap-3 bg-white text-[#3A643B] px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Book Consultation
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-[2.5rem] h-[400px] sm:h-[450px] flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <span className="text-[100px] sm:text-[120px]">👨‍⚕️</span>
                  <p className="text-white/80 font-medium mt-4">Doctor Consultation</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#A8D5A9]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF7E2] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[#3A643B] font-semibold text-sm uppercase tracking-wider mb-3">
              Why Amrutam
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We blend ancient Ayurvedic wisdom with modern science for your wellness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[#3A643B] font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who transformed their lives with Amrutam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#3A643B] to-[#2d4e2e] rounded-full flex items-center justify-center text-2xl text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Modern Design */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#3A643B] to-[#2d5a2e] rounded-[2.5rem] p-10 sm:p-14 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 text-center">
              <span className="inline-block text-[#A8D5A9] font-semibold text-sm uppercase tracking-wider mb-4">
                Stay Updated
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Subscribe to Newsletter
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Get the latest updates on new products, health tips, and exclusive offers.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="bg-white text-[#3A643B] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </>
  );
}

export default Home;
