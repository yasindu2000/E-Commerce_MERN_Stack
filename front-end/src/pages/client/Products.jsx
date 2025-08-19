import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";
import { FaSearch } from "react-icons/fa";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (loading) {
      if (query == "") {
        axios.get("http://localhost:5000/products").then((res) => {
          setProducts(res.data);
          setLoading(false);
        });
      } else {
        axios
          .get(`http://localhost:5000/products/search/${query}`)
          .then((res) => {
            setProducts(res.data);
            setLoading(false);
          });
      }
    }
  }, [loading]);

  // useEffect(() => {
  //     if(loading){
  //         axios.get("http://localhost:5000/products").then(
  //             (res)=>{
  //                setProducts(res.data);
  //                setLoading(false);
  //             }
  //         )
  //     }

  // }, [loading]);

  return (
    <div className="w-full h-full  ">
       
      <div className="relative w-[300px] left-[1120px]">
        {/* Search Icon */}
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        {/* Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setLoading(true);
          }}
          className="w-full h-[45px] pl-10 pr-4 border border-gray-100 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-200 transition-all duration-300"
        />
      </div>
   
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-wrap gap-[40px] items-center justify-center mt-10 ">
          {products.map((product) => {
            return <ProductCard key={product.productId} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
