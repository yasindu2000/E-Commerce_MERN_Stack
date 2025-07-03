import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddProductAdmin() {
  return (
    <div className="w-full h-full flex justify-center items-center">
			<div className="w-[600px] border-[3px] rounded-[15px] p-[40px] flex flex-wrap justify-between">
				<div className="w-[200px] flex flex-col gap-[5px]">
					<label className="text-sm font-semibold">Product ID</label>
					<input
						type="text"
						
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
				</div>
				<div className="w-[300px] flex flex-col gap-[5px]">
					<label className="text-sm font-semibold">Product Name</label>
					<input
						type="text"
						
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
				</div>
				<div className="w-[500px] flex flex-col gap-[5px]">
					<label className="text-sm font-semibold">Alternative Names</label>
					<input
						type="text"
						
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
				</div>
				<div className="w-[200px] flex flex-col gap-[5px]">
					<label className="text-sm font-semibold">Labelled Price</label>
					<input
						type="number"
						
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
				</div>
				<div className="w-[200px] flex flex-col gap-[5px]">
					<label className="text-sm font-semibold">Price</label>
					<input
						type="number"
						
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
				</div>
				<div className="w-[500px] flex flex-col gap-[5px]">
					<label className="text-sm font-semibold">Images</label>
					<input
						type="text"
						
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
				</div>
				<div className="w-[500px] flex flex-col gap-[5px]">
					<label className="text-sm font-semibold">Description</label>
					<textarea
						
						className="w-full border-[1px] h-[100px] rounded-md"
					></textarea>
				</div>
				<div className="w-[200px] flex flex-col gap-[5px]">
					<label className="text-sm font-semibold">Stock</label>
					<input
						type="number"
						
						className="w-full border-[1px] h-[40px] rounded-md"
					/>
				</div>
				<div className="w-[200px] flex flex-col gap-[5px]">
					<label className="text-sm font-semibold">Is Available</label>
					<select
						
						
						className="w-full border-[1px] h-[40px] rounded-md"
					>
						<option value={true}>Available</option>
						<option value={false}>Not Available</option>
					</select>
				</div>
				<div className="w-[200px] flex flex-col gap-[5px]">
					<label className="text-sm font-semibold">Category</label>
					<select
						
						className="w-full border-[1px] h-[40px] rounded-md"
					>
						<option value="cream">Cream</option>
						<option value="face wash">Face Wash</option>
						<option value="soap">Soap</option>
						<option value="fragrance">Fragrance</option>
					</select>
				</div>
				<div className="w-full flex justify-center flex-row py-[20px]">
					<Link
						to={"/admin/products"}
						className="w-[200px] h-[50px] bg-white text-black border-[2px] rounded-md flex justify-center items-center"
					>
						Cancel
					</Link>
					<button  className="w-[200px] h-[50px] bg-black text-white border-[2px] rounded-md flex justify-center items-center ml-[20px]">
						Add Product
					</button>
				</div>
			</div>
		</div>
  )
}

export default AddProductAdmin