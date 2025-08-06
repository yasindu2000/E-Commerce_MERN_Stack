import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <header className="h-[100px]  flex justify-center items-center shadow-xl shadow-gray-300 gap-[40px] relative">
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