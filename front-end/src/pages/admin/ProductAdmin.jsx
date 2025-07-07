//https://vhbtfkunkhqsanrzscop.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoYnRma3Vua2hxc2FucnpzY29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NjQyMzgsImV4cCI6MjA2NzQ0MDIzOH0.afeMlN8p3rqtzceprr3krf1RiAZn8qpIEVo7HI9gjbc
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