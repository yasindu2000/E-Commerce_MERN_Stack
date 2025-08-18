import { NavLink } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import logo from "../../public/main.png";
import { useCart } from "../context/CartContext";


function Header() {

const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
     
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-black text-xl underline underline-offset-8 font-semibold"
      : "text-black text-xl";

  return (
    <header className="h-[100px] flex justify-center items-center shadow-xl shadow-gray-300 gap-[40px] fixed top-0 left-0 w-full bg-white z-50">
      
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute object-cover w-35 h-30 left-[80px] cursor-pointer"
      />

      {/* Nav Links */}
      <NavLink to="/" className={linkClasses}>
        Home
      </NavLink>
      <NavLink to="/products" className={linkClasses}>
        Products
      </NavLink>
      <NavLink to="/reviews" className={linkClasses}>
        Reviews
      </NavLink>
      <NavLink to="/about-us" className={linkClasses}>
        About Us
      </NavLink>
      <NavLink to="/contact-us" className={linkClasses}>
        Contact Us
      </NavLink>

      {/* Cart */}
       <NavLink to="/cart" className="absolute right-[80px] ">
        <BiCart className="text-black text-3xl" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </NavLink>
    </header>
  );
}

export default Header;
