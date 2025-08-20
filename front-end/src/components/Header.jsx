import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import logo from "../../public/main.png";
import { useCart } from "../context/CartContext";
import { IoLogOutOutline } from "react-icons/io5";

function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-black text-xl underline underline-offset-8 font-semibold"
      : "text-black text-xl";

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md shadow-gray-300">
      <div className="flex justify-between items-center h-[100px] px-4 sm:px-6 lg:px-20 relative">
        {/* Hamburger & Logo */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-black text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
          <img src={logo} alt="Logo" className=" w-30 h-20  md:w-35 md:h-20 cursor-pointer" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/products" className={linkClasses}>Products</NavLink>
          <NavLink to="/reviews" className={linkClasses}>Reviews</NavLink>
          <NavLink to="/about-us" className={linkClasses}>About Us</NavLink>
          <NavLink to="/contact-us" className={linkClasses}>Contact Us</NavLink>
        </nav>

        {/* Cart Icon */}
        <NavLink to="/cart" className="relative text-black text-3xl right-[80px]">
          <BiCart className="text-black text-3xl" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </NavLink>
        {
					token!=null&&<button className=" absolute text-black md:right-[60px] right-[20px] cursor-pointer hover:text-red-700 text-xl ml-4" onClick={
						()=>{
							localStorage.removeItem("token");
							navigate("/login");
						}
					}><IoLogOutOutline className=" text-3xl font-semibold"/>
						
					</button>

				}
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col pt-[100px] pl-6 gap-6`}
      >
        <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/products" className={linkClasses} onClick={() => setMenuOpen(false)}>Products</NavLink>
        <NavLink to="/reviews" className={linkClasses} onClick={() => setMenuOpen(false)}>Reviews</NavLink>
        <NavLink to="/about-us" className={linkClasses} onClick={() => setMenuOpen(false)}>About Us</NavLink>
        <NavLink to="/contact-us" className={linkClasses} onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Header;
