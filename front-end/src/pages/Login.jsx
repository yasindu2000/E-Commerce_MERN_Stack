import { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';
import { IoCloseSharp } from "react-icons/io5";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = ()=>{
    
    axios.post("http://localhost:5000/users/login",{
      email : email,
      password : password
    }).then((response)=>{
               console.log(response.data)
              //  alert("Login successful")
              localStorage.setItem("token",response.data.token)
              toast.success("Login Successful")
               if(response.data.role == "admin"){

                    
                    navigate("/admin")

                }else if(response.data.role == "user"){

                    
                    navigate("/")

                }
    }).catch((error)=>{
                console.log(error)
                // alert("login failed")
                toast.error("Login Failed")
    })
  }
  return (
    <div className="w-full h-screen bg-white bg-cover bg-center flex justify-center items-center">
			    
      <div className="w-[450px] h-[500px] backdrop-blur-sm shadow-2xl rounded-[30px]  gap-[20px] text-gray-800 flex flex-col items-center justify-center">
       <Link to={"/"} className='fixed right-[30px] top-[30px] text-gray-600 text-3xl ml-[90%]  cursor-pointer '  >
        <IoCloseSharp />
       </Link>
				<h1 className="absolute top-[20px] text-3xl font-bold text-center my-5">Login</h1>
      
        
                <div className="w-[300px]  flex flex-col">
                    <span className="text-lg ">Email</span>
                    <input onChange={(e)=>{
                      setEmail(e.target.value)

                    }} type="text" className="w-[300px] h-[40px] border border-gray-500 rounded-xl focus:outline-none "/>
                </div>
                <div className="w-[300px]  flex flex-col">
                    <span className="text-lg ">Password</span>

                    <input onChange={(e)=>{
                          setPassword(e.target.value)
                    }} type="password" className="w-[300px] h-[40px] border border-gray-500  rounded-xl focus:outline-none"/>

                </div>
                <button onClick={handleSubmit} className="w-[300px] h-[40px] bg-blue-500 rounded-xl text-white text-lg mt-5 hover:bg-blue-600 transition-all duration-300 cursor-pointer">
                    Login
                </button>
                <p>Don't have an account? <Link to="/register" className="text-blue-500">Sign up</Link> from here</p>
                
			</div>
		</div>
  )
}

export default Login