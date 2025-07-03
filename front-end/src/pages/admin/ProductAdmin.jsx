import React from 'react'
import {BiPlus} from "react-icons/bi"
import { Link } from 'react-router-dom'

function ProductAdmin() {
  return (
    <div className='w-full h-full border-[3px]'>
        <Link to={"/admin/newProducts"} className="fixed right-[30px] bottom-[30px] p-[20px] text-white bg-black rounded-full shadow-2xl">
            <BiPlus className='text-3xl'/>
        </Link>
    </div>
  )
}

export default ProductAdmin