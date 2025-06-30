import React from 'react'

function Login() {
  return (
    <div className='w-full h-screen bg-[url(./login.jpg)] bg-cover bg-center flex justify-center items-center'>
      <div className="w-[500px] h-[500px] backdrop-blur-sm shadow-2xl rounded-[30px]">
          <h1 className='text-3xl font-bold  text-center my-5 text-white'>Login</h1>
          <input type="text" className="" />
      </div>
    </div>
  )
}

export default Login