
import { useState } from "react";
import { Link} from "react-router-dom";


function Register() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user");
  const [image, setImage] = useState("");

  return (
    <div className="w-full h-screen bg-white bg-cover bg-center flex justify-center items-center">
      <div className="w-[500px] h-[700px] backdrop-blur-sm shadow-2xl rounded-[30px] gap-[5px] text-gray-800 flex flex-col items-center justify-center">
        <h1 className="absolute top-[20px] text-3xl font-bold text-center my-1">
          Register
        </h1>

        {/* First Name */}
        <div className="w-[300px] flex flex-col mt-10">
          <span className="text-lg">First Name</span>
          <input
            name="firstName"
            value={firstName}
            onChange={(e)=>{setFirstName(e.target.value)}}
            type="text"
            className="w-[300px] h-[40px] border border-gray-300 shadow-sm rounded-xl focus:outline-none"
          />
        </div>

        {/* Last Name */}
        <div className="w-[300px] flex flex-col">
          <span className="text-lg">Last Name</span>
          <input
            name="lastName"
            value={lastName}
            onChange={(e)=>{setLastName(e.target.value)}}
            type="text"
            className="w-[300px] h-[40px] border border-gray-300 shadow-sm rounded-xl focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="w-[300px] flex flex-col">
          <span className="text-lg">Email</span>
          <input
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            className="w-[300px] h-[40px] border border-gray-300 shadow-sm rounded-xl focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="w-[300px] flex flex-col">
          <span className="text-lg">Password</span>
          <input
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            className="w-[300px] h-[40px] border border-gray-300 shadow-sm rounded-xl focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div className="w-[300px] flex flex-col">
          <span className="text-lg">Phone</span>
          <input
            name="phone"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            type="text"
            className="w-[300px] h-[40px] border border-gray-300 shadow-sm rounded-xl focus:outline-none"
          />
        </div>

        {/* Role (select user/admin) */}
        <div className="w-[300px] flex flex-col">
          <span className="text-lg">Role</span>
          <select
            name="role"
            value={role}
            onChange={(e)=>{setRole(e.target.value)}}
            
            className="w-[300px] h-[40px] border border-gray-300 shadow-sm rounded-xl focus:outline-none"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Profile Image Upload */}
        <div className="w-[300px] flex flex-col">
          <span className="text-lg">Profile Image</span>
          <input
            name="image"
            value={image}
            onChange={(e)=>{setImage(e.target.value)}}
            type="file"
            accept="image/*"
            className="w-[300px] h-[40px] border border-gray-300 shadow-sm rounded-xl focus:outline-none p-1"
          />
        </div>

        {/* Submit */}
        <button
          
          className="w-[300px] h-[40px] bg-blue-500 rounded-xl text-white text-lg mt-3 hover:bg-blue-600 transition-all duration-300 cursor-pointer"
        >
          Register
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
