import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import logo from "../../public/main.png"

function Header() {
  return (
    <header className="h-[100px]  flex justify-center items-center shadow-xl shadow-gray-300 gap-[40px]  fixed top-0 left-0 w-full bg-white z-50">
            
        <img src={logo} alt="" className="absolute object-cover w-35 h-30 left-[80px] cursor-pointer" />
            
            
            <Link to="/" className="text-black text-xl ">
                Home
            </Link>
            <Link to="/products" className="ml-4 text-black text-xl">
                Products
            </Link>
            <Link to="/reviews" className="ml-4 text-black text-xl">
                Reviews
            </Link>
            <Link to="/about-us" className="ml-4 text-black text-xl">
                About Us
            </Link>
            <Link to="/contact-us" className="ml-4 text-black text-xl">
                Contact Us
            </Link>
            
            <Link to="/cart" className="absolute right-[80px] ">
                <BiCart className="text-black text-3xl ml-4" />
            </Link>
            
        </header>
  )
}

export default Header