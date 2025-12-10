import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FiPhone, FiShoppingCart, FiBell, FiChevronDown } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Wallet } from "lucide-react";
import { useCart } from "../../context/CartContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/find-doctors", label: "Find Doctors" },
  { to: "/lab-tests", label: "Lab Tests" },
  { to: "/products", label: "Shop" },
  { to: "/forum", label: "Forum" },
  { to: "/about", label: "About Us" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { getCartCount } = useCart();

  return (
    <nav className="bg-[#FFF7E2] relative h-auto lg:h-[147px]">
      <div className="mx-auto relative h-full">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-semibold text-[#3A643B] tracking-[0.2em]">
              AMRUTAM
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/cart" className="relative">
              <div className="w-8 h-8 bg-[#D2D9D2] rounded-full flex items-center justify-center">
                <FiShoppingCart className="w-5 h-5 text-[#3A643B]" strokeWidth={1} />
              </div>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#3A643C] text-white text-[10px] h-4 min-w-4 px-1 rounded-full flex items-center justify-center font-['Poppins']">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button
              className="w-8 h-8 flex items-center justify-center text-[#3A643B]"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle navigation menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Phone Number - Left (Desktop) */}
        <div className="hidden lg:flex items-end gap-1 absolute left-5 top-8">
          <FiPhone className="w-5 h-5 text-[#3A643B]" />
          <span className="text-l text-[#3A643C] font-normal leading-[140%] capitalize">
            +91 9826352321
          </span>
        </div>

        {/* Logo - Center (Desktop) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-[22px]">
          <Link to="/" className="flex items-center justify-center w-[208px] h-10">
            <span className="text-[38px] font-semibold text-[#3A643B] tracking-[0.35em]">
              AMRUTAM
            </span>
          </Link>
        </div>

        {/* Menu items - Center */}
        <div className="hidden lg:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2 top-[99px]">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[18px] font-semibold leading-[140%] capitalize text-[#3A643B] ${
                  isActive ? "border-b-2 border-[#3A643B]" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Icons - Right - positioned at top: 93px to align with menu */}
        <div className="hidden lg:flex items-center absolute right-5 top-[93px]">
          {/* Frame 1171275529 - Icons container with gap-24px */}
          <div className="flex items-center gap-6">
            {/* Frame 1171275528 - Wallet icon */}
            <Link to="/wallet" className="relative" title="Wallet">
              <div className="w-9 h-9 bg-[#D2D9D2] rounded-[18px] flex items-center justify-center p-1.5">
                <Wallet className="w-6 h-6 text-[#3A643B]" strokeWidth={0.7} />
              </div>
              {/* Badge - positioned at top right of circle */}
              <span className="absolute -top-1.5 left-5 bg-[#3A643C] text-white text-[10px] font-normal h-5 min-w-5 px-1.5 rounded-full flex items-center justify-center leading-[140%] font-['Poppins']">
                22
              </span>
            </Link>

            {/* Frame 1984077291 - Cart icon */}
            <Link to="/cart" className="relative" title="Cart">
              <div className="w-9 h-9 bg-[#D2D9D2] rounded-[18px] flex items-center justify-center p-1.5">
                <FiShoppingCart className="w-6 h-6 text-[#3A643B]" strokeWidth={0.7} />
              </div>
              {/* Badge - positioned at top right of circle */}
              {getCartCount() > 0 && (
                <span className="absolute -top-1.5 left-5 bg-[#3A643C] text-white text-[10px] font-normal h-5 min-w-5 px-1.5 rounded-full flex items-center justify-center leading-[140%] font-['Poppins']">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Frame 1171275527 - Bell icon */}
            <Link to="/notifications" title="Notifications">
              <div className="w-9 h-9 bg-[#D2D9D2] rounded-[18px] flex items-center justify-center p-1.5">
                <FiBell className="w-5 h-5 text-[#3A643B]" strokeWidth={0.7} />
              </div>
            </Link>

            {/* Frame 1171275530 - User icon */}
            <Link to="/profile" title="Profile">
              <div className="w-9 h-9 bg-[#D2D9D2] rounded-[18px] flex items-center justify-center py-1.5">
                <HiOutlineUserCircle className="w-6 h-6 text-[#3A643B]" />
              </div>
            </Link>
          </div>

          {/* Icons/down - Chevron with gap-16px from icons */}
          <button className="ml-4" title="More options">
            <FiChevronDown className="w-6 h-6 text-black" strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FFF7E2] border-t border-[#E0D4B8] z-50 shadow-lg">
            <div className="flex flex-col py-4 px-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `py-3 px-2 text-base font-medium border-b border-[#E0D4B8]/50 ${
                      isActive ? "text-[#3A643B] font-semibold bg-[#3A643B]/5" : "text-[#474747]"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-[#E0D4B8]">
                <Link to="/wallet" className="flex items-center gap-2 text-[#3A643B]" onClick={() => setOpen(false)}>
                  <Wallet className="w-5 h-5" />
                  <span className="text-sm">Wallet</span>
                </Link>
                <Link to="/notifications" className="flex items-center gap-2 text-[#3A643B]" onClick={() => setOpen(false)}>
                  <FiBell className="w-5 h-5" />
                  <span className="text-sm">Alerts</span>
                </Link>
                <Link to="/profile" className="flex items-center gap-2 text-[#3A643B]" onClick={() => setOpen(false)}>
                  <HiOutlineUserCircle className="w-5 h-5" />
                  <span className="text-sm">Profile</span>
                </Link>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E0D4B8]">
                <a href="tel:+919826352321" className="flex items-center gap-2 text-[#3A643B]">
                  <FiPhone className="w-4 h-4" />
                  <span className="text-sm">+91 9826352321</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
