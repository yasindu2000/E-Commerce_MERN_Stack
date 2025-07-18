//https://vhbtfkunkhqsanrzscop.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoYnRma3Vua2hxc2FucnpzY29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NjQyMzgsImV4cCI6MjA2NzQ0MDIzOH0.afeMlN8p3rqtzceprr3krf1RiAZn8qpIEVo7HI9gjbc
import axios from "axios";
import { useEffect, useState } from "react";
import {BiPlus, BiTrash} from "react-icons/bi"
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";



function ProductAdmin() {

  const [products, setProducts] = useState([]);
  const [a, setA] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then(
    (res)=>{
            setProducts(res.data)
            
    }
  )
  
    
  }, [a]);

  const navigate = useNavigate();
  


  return (
    <div className='w-full h-full border-[3px]'>
      <table className="">
        <thead className="">
           <tr>
            <th className="p-[10px]">Image</th>
            <th className="p-[10px]">ProductId</th>
            <th className="p-[10px]">Name</th> 
            <th className="p-[10px]">Price</th> 
            <th className="p-[10px]">Labelled Price</th> 
            <th className="p-[10px]">Category</th> 
            <th className="p-[10px]">Stock</th> 
            <th className="p-[10px]">Action</th> 
            
           </tr>
        </thead>
        <tbody>
           {
            products.map(
              (product,index)=>{
                return(
                  <tr key={index} >
                    <td>
                      <img src={product.images[0]} alt={product.name} className="w-[50px] h-[50px] " />
                    </td>
                    <td className="p-[10px]">{product.productId}</td>
                    <td className="p-[10px]">{product.name}</td>
                    <td className="p-[10px]">{product.price}</td>
                    <td className="p-[10px]">{product.labelledPrice}</td>
                    <td className="p-[10px]">{product.category}</td>
                    <td className="p-[10px]">{product.stock}</td>
                    <td className="p-[10px]">
                      <BiTrash className="bg-red-500 p-[6px] text-3xl rounded-full text-white cursor-pointer" onClick={
                        ()=>{
                              const token = localStorage.getItem("token");
                              if(token == null){
                                navigate("/login");
                                return;
                              }

                              axios.delete("http://localhost:5000/products/:" + product.productId,
                                {
                                  headers:{
                                  Authorization:`Bearer ${token}`
                                }
                              }
                              ).then(
                                (res)=>{
                                      console.log("product delete successfully")
                                      console.log(res.data)
                                      toast.success("Product delete successfully");
                                      setA(a+1)
                                }
                              ).catch(
                                (error)=>{
                                       console.log("Error deleting product:", error);
                                       toast.error("Failed to delete product")
                                }
                              )
                        }
                      }/>
                    </td>
                  </tr>
                )

              }
            )
           }
        </tbody>
      </table>
        <Link to={"/admin/newProducts"} className="fixed right-[30px] bottom-[30px] p-[20px] text-white bg-black rounded-full shadow-2xl">
            <BiPlus className='text-3xl'/>
        </Link>
    </div>
  )
}

export default ProductAdmin