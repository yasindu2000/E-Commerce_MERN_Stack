import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-[100px]  flex justify-center items-center shadow-xl shadow-gray-300 gap-[40px] ">
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
        </header>
  )
}

export default Header