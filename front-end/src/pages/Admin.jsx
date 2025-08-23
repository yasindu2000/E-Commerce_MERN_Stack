import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import ProductAdmin from "./admin/ProductAdmin";
import AddProductAdmin from "./admin/AddProductAdmin";
import UpdateProduct from "./admin/UpdateProduct";
import OrderPage from "./admin/OrderPage";
import UserView from "./admin/UserView";
import DashBoard from "./admin/DashBoard";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import toast from "react-hot-toast";

function Admin() {
  const navigate = useNavigate();
  const [adminValidated, setAdminValidated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You are not logged in");
      navigate("/login");
      return;
    }
    axios
      .get("http://localhost:5000/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.role === "admin") {
          setAdminValidated(true);
        } else {
          toast.error("You are not authorized");
          navigate("/login");
        }
      })
      .catch(() => {
        toast.error("You are not authorized");
        navigate("/login");
      });
  }, []);

  const linkClasses = ({ isActive }) =>
    `flex flex-row h-[60px] w-full shadow-xl shadow-gray-100 p-[20px] items-center text-xl gap-[25px] ${
      isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-200"
    }`;

  return (
    <div className="w-full h-screen flex">
      {adminValidated ? (
        <>
          <div className="w-[300px] h-full flex flex-col items-center gap-1">
            <span className="text-3xl font-bold my-5">Admin Panel</span>

            <NavLink to="/admin/" end className={linkClasses}>
              <MdDashboard className="size-6" /> DashBoard
            </NavLink>

            <NavLink to="/admin/products" className={linkClasses}>
              <FaBoxArchive /> Products
            </NavLink>

            <NavLink to="/admin/orders" className={linkClasses}>
              <GiShoppingBag /> Orders
            </NavLink>

            <NavLink to="/admin/users" className={linkClasses}>
              <IoPeople /> Users
            </NavLink>
          </div>

          <div className="w-[calc(100%-300px)] h-full">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/products" element={<ProductAdmin />} />
              <Route path="/newProducts" element={<AddProductAdmin />} />
              <Route path="/updateProduct" element={<UpdateProduct />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/users" element={<UserView />} />
            </Routes>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Admin;
