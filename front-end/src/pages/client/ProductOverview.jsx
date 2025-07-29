import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import ImageSlider from "../../components/ImageSlider";


function ProductOverview() {

const params = useParams();
const [product, setProduct] = useState(null);
const [status, setStatus] = useState("loading");

useEffect(() => {
    
if(status == "loading"){
    axios.get(`http://localhost:5000/products/${params.productId}`).then(
        (res)=>{
            
            setProduct(res.data);
            setStatus("success");      
        }
    ).catch(
        (error)=>{
            setStatus("error")
                    
        }
    )
        
    
}
   
}, [status]);

  return (
    <div className="w-full h-full">
        {

            status === "loading" && <Loader/>
        }

        {
            status == "success" && <div className="w-full h-full flex flex-row">
                <div className="w-[49%] flex flex-col justify-center items-center">
                  <ImageSlider images={product.images}/>
                </div>
                <div className="w-[49%] bg-amber-700">

                </div>
            </div>
        }
        {
            status == "error" && <div className="">error loading product</div>
        }
    </div>
  )
}

export default ProductOverview