# 🌿 Amrutam Consumer Portal

A modern, responsive e-commerce web application for Amrutam Pharmaceuticals, built with React and Vite. This platform offers Ayurvedic wellness products, online consultations, and a community forum for health discussions.

![Amrutam Logo](https://img.shields.io/badge/Amrutam-Ayurvedic_Wellness-3A643B?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Styling & Design](#styling--design)
- [State Management](#state-management)
- [SEO Optimization](#seo-optimization)
- [Usage Guide](#usage-guide)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**Amrutam Consumer Portal** is a comprehensive e-commerce platform designed for Amrutam Pharmaceuticals to showcase and sell their Ayurvedic wellness products. The platform provides:

- **Product Catalog**: Browse a wide range of Ayurvedic products with detailed information
- **Online Consultations**: Book personalized health consultations with Ayurvedic experts
- **Community Forum**: Engage with a wellness community to share experiences and knowledge
- **Shopping Cart**: Seamless shopping experience with cart management
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)

---

## ✨ Features

### 🛍️ E-Commerce Features
- **Product Listings**: Grid and list view with filtering and sorting
- **Product Details**: Comprehensive product information with ingredients breakdown
- **Shopping Cart**: Add/remove products, quantity management
- **Cart Notifications**: Real-time feedback on cart actions
- **Checkout Process**: Streamlined checkout flow

### 👨‍⚕️ Consultation Features
- **Doctor Profiles**: Browse qualified Ayurvedic practitioners
- **Appointment Booking**: Schedule consultations with preferred doctors
- **Consultation History**: Track past and upcoming appointments
- **Specialization Filters**: Find doctors by health concerns

### 💬 Community Features
- **Discussion Forum**: Create and participate in wellness discussions
- **Category System**: Organized topics (Hair Care, Skin Care, Wellness, etc.)
- **Trending Topics**: Discover popular health discussions
- **Top Contributors**: Recognize active community members
- **Search & Filter**: Find relevant discussions easily

### 🎨 User Experience
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Hover effects and transitions
- **Intuitive Navigation**: Easy-to-use menu structure
- **Fast Loading**: Optimized performance with Vite
- **SEO Optimized**: Meta tags for better search visibility

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern UI library with hooks
- **React Router DOM 7.1.1** - Client-side routing

### Build Tool
- **Vite 6.0.1** - Fast build tool and dev server

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Icons
- **React Icons 5.4.0** - Comprehensive icon library
  - Feather Icons (Fi)
  - Heroicons (Hi)
  - Tabler Icons (Ti)
  - Font Awesome (Fa)

### Code Quality
- **ESLint 9.17.0** - JavaScript linting
- **ESLint Plugin React** - React-specific linting rules

---

## 📦 Installation

### Prerequisites
- Node.js (v16.0 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/amrutam-consumer-portal.git
cd amrutam-consumer-portal
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

The application will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
amrutam-consumer-portal/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, fonts, and media files
│   │   ├── ingredient-2.png
│   │   ├── product-1.png
│   │   ├── root.png
│   │   └── ...
│   ├── components/              # Reusable components
│   │   ├── layout/
│   │   │   ├── Header.jsx       # Main navigation header
│   │   │   ├── Footer.jsx       # Footer with links
│   │   │   ├── Download.jsx     # App download section
│   │   │   └── MainLayout.jsx   # Layout wrapper
│   │   └── ui/
│   │       ├── Banner.jsx       # Promotional banners
│   │       ├── Button.jsx       # Reusable button component
│   │       ├── Card.jsx         # Card component
│   │       ├── CartNotification.jsx  # Cart feedback
│   │       ├── Input.jsx        # Form input component
│   │       ├── ItemsList.jsx    # List display component
│   │       ├── Navbar.jsx       # Navigation bar
│   │       └── SearchBar.jsx    # Search functionality
│   ├── context/                 # React Context API
│   │   └── CartContext.jsx      # Global cart state management
│   ├── data/                    # Static data and mock APIs
│   │   ├── consultations.js     # Consultation data
│   │   ├── doctors.js           # Doctor profiles
│   │   └── products.js          # Product catalog
│   ├── pages/                   # Page components (routes)
│   │   ├── Auth/
│   │   │   ├── Login.jsx        # User login page
│   │   │   └── Register.jsx     # User registration page
│   │   ├── Cart/
│   │   │   ├── Cart.jsx         # Shopping cart page
│   │   │   └── Checkout.jsx     # Checkout page
│   │   ├── Consultations/
│   │   │   ├── BookConsultation.jsx  # Book appointment
│   │   │   └── ConsultationsHistory.jsx  # View history
│   │   ├── Forum/
│   │   │   └── Forum.jsx        # Community forum
│   │   ├── Home/
│   │   │   └── Home.jsx         # Landing page
│   │   ├── Products/
│   │   │   ├── ProductsList.jsx    # Product catalog
│   │   │   ├── ProductDetails.jsx  # Single product view
│   │   │   └── Ingredients.jsx     # Ingredient details
│   │   └── Profile/
│   │       └── Profile.jsx      # User profile page
│   ├── routes/
│   │   └── AppRoutes.jsx        # Route configuration
│   ├── seo/
│   │   └── Seo.jsx              # SEO component for meta tags
│   ├── App.jsx                  # Main App component
│   ├── App.css                  # Global styles
│   ├── index.css                # Tailwind imports
│   └── main.jsx                 # Application entry point
├── .gitignore                   # Git ignore file
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

---

## 🗺️ Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero, categories, featured products |
| `/products` | ProductsList | Product catalog with filters and search |
| `/products/:id` | ProductDetails | Detailed product information and reviews |
| `/ingredients/:name` | Ingredients | Ayurvedic ingredient information |
| `/cart` | Cart | Shopping cart management |
| `/checkout` | Checkout | Order placement and payment |
| `/consultations` | BookConsultation | Browse and book doctor consultations |
| `/consultations/history` | ConsultationsHistory | View appointment history |
| `/forum` | Forum | Community discussion board |
| `/profile` | Profile | User profile and settings |
| `/login` | Login | User authentication |
| `/register` | Register | New user registration |

---

## 🧩 Components

### Layout Components

#### **MainLayout**
Wrapper component providing consistent structure across pages:
- Header navigation
- Main content area
- Footer
- Download app section

#### **Header**
Top navigation with:
- Logo and branding
- Navigation links
- Shopping cart icon with count
- User authentication status

#### **Footer**
Footer section with:
- Company information
- Quick links
- Social media icons
- Newsletter signup

### UI Components

#### **Button**
Reusable button component with variants:
- Primary, Secondary, Outline
- Different sizes (sm, md, lg)
- Loading state support

#### **Card**
Flexible card component for displaying:
- Product information
- Doctor profiles
- Consultation details

#### **CartNotification**
Toast-style notification for cart actions:
- Add to cart confirmation
- Remove from cart feedback
- Auto-dismiss functionality

---

## 🎨 Styling & Design

### Color Palette

```css
/* Primary Colors */
--primary-green: #3A643B;      /* Brand primary */
--light-cream: #FFF7E2;        /* Background */
--dark-text: #2E2F2E;          /* Text primary */

/* Accent Colors */
--orange: #FCA452;             /* Highlights */
--light-orange: #FFF4E6;       /* Subtle backgrounds */

/* Neutral Colors */
--gray-light: #F5F5F5;
--gray-medium: #666666;
--gray-dark: #404040;
```

### Typography

**Font Family**: Poppins (Google Fonts)

```css
/* Headings */
H1: 48px, Bold, #2E2F2E
H2: 36px, SemiBold, #2E2F2E
H3: 24px, SemiBold, #2E2F2E

/* Body Text */
Body: 16px, Regular, #666666
Small: 14px, Regular, #767676
```

### Design Principles

1. **Consistency**: Uniform spacing, colors, and typography
2. **Hierarchy**: Clear visual hierarchy with proper heading levels
3. **Responsiveness**: Mobile-first approach with breakpoints
4. **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
5. **Performance**: Optimized images, lazy loading, code splitting

---

## 🔄 State Management

### Cart Context

Global state management using React Context API:

```javascript
// Cart Context provides:
- cart: Array of cart items
- cartCount: Total number of items
- addToCart(product): Add product to cart
- removeFromCart(productId): Remove product from cart
- updateQuantity(productId, quantity): Update item quantity
- clearCart(): Empty the cart
```

### Usage Example

```javascript
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  return (
    <button onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  );
}
```

---

## 🔍 SEO Optimization

### SEO Component

Dynamic meta tags for each page:

```javascript
<Seo
  title="Page Title - Amrutam"
  description="Page description for search engines"
  keywords="ayurveda, wellness, health"
/>
```

### Features
- Dynamic title tags
- Meta descriptions
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Structured data (JSON-LD)

---

## 📖 Usage Guide

### Adding a New Product

1. Navigate to `src/data/products.js`
2. Add product object:

```javascript
{
  id: 4,
  name: "New Product Name",
  price: "999.00",
  image: productImage,
  rating: 4.8,
  reviews: 120,
  description: "Product description",
  category: "hair-care"
}
```

3. Import product image in component

### Adding a New Page

1. Create component in `src/pages/`
2. Add route in `src/routes/AppRoutes.jsx`:

```javascript
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in Header component

### Customizing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'brand-primary': '#3A643B',
      'brand-secondary': '#FFF7E2',
    }
  }
}
```

---

## 🚀 Future Enhancements

### Planned Features

- [ ] User authentication with JWT
- [ ] Payment gateway integration (Razorpay/Stripe)
- [ ] Order tracking system
- [ ] Email notifications
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced search with filters
- [ ] Multi-language support
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Analytics integration
- [ ] Progressive Web App (PWA)
- [ ] Real-time chat support
- [ ] Subscription model for products
- [ ] Doctor video consultation

### Technical Improvements

- [ ] Backend API integration
- [ ] Database implementation (MongoDB/PostgreSQL)
- [ ] Redux for complex state management
- [ ] Unit and integration testing (Jest, React Testing Library)
- [ ] E2E testing (Cypress)
- [ ] CI/CD pipeline
- [ ] Docker containerization
- [ ] CDN for static assets
- [ ] Image optimization
- [ ] Code splitting and lazy loading

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Use functional components with hooks
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Use Tailwind CSS for styling
- Maintain responsive design
- Test on multiple browsers

---

## 📄 License

This project is proprietary software developed for Amrutam Pharmaceuticals.

© 2025 Amrutam Pharmaceuticals. All rights reserved.

---

## 👥 Team

**Developed by**: [Your Name]  
**Company**: Amrutam Pharmaceuticals  
**Internship Duration**: [Start Date] - [End Date]

---

## 📞 Support

For any queries or support:

- **Email**: support@amrutam.co.in
- **Phone**: +91-XXXXX-XXXXX
- **Website**: https://www.amrutam.co.in

---

## 🙏 Acknowledgments

- Amrutam Pharmaceuticals team for guidance and support
- React and Vite communities for excellent documentation
- Tailwind CSS for the utility-first framework
- All open-source contributors

---

## 📊 Project Statistics

- **Total Components**: 25+
- **Total Pages**: 12
- **Lines of Code**: ~5000+
- **Development Time**: [X weeks]
- **Technologies Used**: 10+

---

## 🔗 Links

- [Live Demo](#) (if deployed)
- [Figma Design](https://www.figma.com/design/8omEAQk83qMzA96x7QaXzZ/)
- [Company Website](https://www.amrutam.co.in)

---

**Made with ❤️ and ☕ for Amrutam Pharmaceuticals**
