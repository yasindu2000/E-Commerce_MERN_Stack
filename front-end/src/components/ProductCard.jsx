import { Link } from "react-router-dom";

function ProductCard(props) {
  const product = props.product;

  return (
    <Link to={"/overview/"+product.productId} className=" flex flex-col w-[300px] h-[400px] shrink-0  shadow-2xl rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <img
        src={product.images[0]}
        alt=""
        className="w-full h-[275px] object-cover"
      />
      <div className="w-full h-[125px] flex flex-col p-3">
        {/* <span className="text-gray-400 text-[15px]">{product.productId}</span> */}
        <h1 className="text-xl text-gray-700 font-semibold">
          {product.name}{" "}
          <br/>
          <span className=" text-gray-400 text-[15px]">{product.category}</span>
        </h1>
        <div className="">
          {product.labelledPrice > product.price ? (
<p className="">
  <span className="line-through mr-[10px]">
    {product.labelledPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
  </span>
  <span className="">
    {product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
  </span>
</p>

          ) : (
            <span>{product.labelledPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
