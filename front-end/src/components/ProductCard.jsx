

function ProductCard(props) {

  const product = props.product;
  
  return (
    <div className=" flex flex-col w-[300px] h-[400px] shrink-0  shadow-2xl rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
           <img src={product.images[0]} alt="" className="w-full h-[275px] object-cover" />
           <div className="w-full h-[125px] flex flex-col p-3">
                 {/* <span className="text-gray-400 text-[15px]">{product.productId}</span> */}
                 <h1 className="text-xl text-gray-700 font-semibold">{product.name} {" "}
                  <span className=" text-gray-400 text-[15px]">{product.category}</span>
                 </h1>
                 <div className="">
                  {
                    product.labelledPrice > product.price ? (<p>discounted</p>) : (<span>{product.price}</span>)
                  }
                 </div>

           </div>
    </div>
  )
}

export default ProductCard