import { Link, Route, Routes,useNavigate } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import ProductAdmin from "./admin/ProductAdmin";
import AddProductAdmin from "./admin/AddProductAdmin";
import UpdateProduct from "./admin/UpdateProduct";
import OrderPage from "./admin/OrderPage";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import toast from "react-hot-toast";

function Admin() {

const navigate = useNavigate();
	const [adminValidated, setAdminValidated] = useState(false);
	useEffect(
        ()=>{
            const token = localStorage.getItem("token");
            if(token == null){
                toast.error("You are not logged in");
                navigate("/login");
            }else{
                axios.get("http://localhost:5000/users", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }).then((response) => {
                    if (response.data.role == "admin") {
                        setAdminValidated(true);
                    } else {
                        toast.error("You are not authorized");
                        navigate("/login");
                    }
                }).catch(() => {
                    toast.error("You are not authorized");
                    navigate("/login");
                });
            }
        }
    ,[]);



  return (
    <div className="w-full h-screen  flex">

        {adminValidated?<>
      <div className="w-[300px] h-full flex flex-col items-center gap-1">
        <span className="text-3xl font-bold my-5">Admin Panel</span>

        <Link
          className="flex flex-row h-[60px] w-full  shadow-xl shadow-gray-100 hover:bg-gray-200 p-[20px] items-center text-xl  gap-[25px]"
          to="/admin/products"
        >
          <FaBoxArchive /> Products
        </Link>
        <Link
          className="flex flex-row h-[60px] w-full shadow-xl shadow-gray-100 hover:bg-gray-200 p-[20px] items-center text-xl  gap-[25px]"
          to="/admin/orders"
        >
          <GiShoppingBag /> Orders
        </Link>
        <Link
          className="flex flex-row h-[60px] w-full shadow-xl shadow-gray-100 hover:bg-gray-200 p-[20px] items-center text-xl  gap-[25px]"
          to="/admin/users"
        >
          <IoPeople /> Users
        </Link>
        <Link
          className="flex flex-row h-[60px] w-full shadow-xl shadow-gray-100 hover:bg-gray-200 p-[20px] items-center text-xl  gap-[25px]"
          to="/admin/settings"
        >
          <IoSettings /> Settings
        </Link>
      </div>
      <div className="w-[calc(100%-300px)] h-full">
        <Routes path="/*">
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<ProductAdmin />} />
          <Route path="/newProducts" element={<AddProductAdmin />} />
          <Route path="/updateProduct" element={<UpdateProduct />} />
          <Route path="/orders" element={<OrderPage />} />
        </Routes>
      </div>
      </>:<Loader/>}
    </div>
  );
}

export default Admin;
