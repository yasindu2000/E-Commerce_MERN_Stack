import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from '../../components/Loader'
import ProductCard from "../../components/ProductCard";


function Products() {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    if(loading){
        axios.get("http://localhost:5000/products").then(
            (res)=>{
               setProducts(res.data);
               setLoading(false);
            }
        )
    }

}, [loading]);




  return (
    <div className="w-full h-full  ">
        {
            loading? <Loader/> : 
            <div className="w-full flex flex-wrap gap-[40px] items-center justify-center mt-10 ">
                {
                    products.map((product)=>{
                           return (
                            <ProductCard key={product.productId} product={product}/>
                           )
                    })
                }
            </div>
        }

    </div>
  )
}

export default Products