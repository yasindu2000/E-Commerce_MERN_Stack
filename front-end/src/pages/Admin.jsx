
import { Route, Routes } from 'react-router-dom'

function Admin() {
  return (
    <div className='w-full h-screen bg-red-500 flex'>
      <div className="w-[300px] h-full bg-amber-50">
    
      </div>
      <div className="w-[calc(100%-300px)] h-full bg-blue-500">
         <Routes path='/'>
              
              <Route path='/' element ={<h1>Dahboard</h1>}/>
              <Route path='/products' element={<h1>Products</h1>}/>
              <Route path='/orders' element={<h1>Orders</h1>}/>

         </Routes>
      </div>


    </div>
  )
}

export default Admin