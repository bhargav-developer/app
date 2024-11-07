import React from 'react'
import {  useNavigate } from 'react-router-dom'

const SignUp = () => {
  const Navigate =  useNavigate()
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-black'>
      <div className='bg-white p-5 rounded-xl'>
        <form action="" className='flex flex-col  gap-5 px-5'>
          <h1 className='text-center text-3xl'>Sign-up</h1>
          <div className='px-4'>
            <h1>Name:</h1>
            <input type="text" className='p-3 outline-none border' placeholder='Enter Your Name ' name='name' />
          </div>
          <div className='px-4'>
            <h1>Email:</h1>
            <input type="text" className='p-3 outline-none border' placeholder='Enter Your Email ' name='email' />
          </div>
          <div className='px-4'>
            <h1>password:</h1>
            <input type="password" className='p-3 outline-none border' placeholder='Enter Your Password ' name='email' />
          </div>
          <div className='flex justify-center items-center'>
            <button className='text-xl bg-[#ff004f] p-1 text-white rounded-sm '>Submit</button>
          </div>
        </form>
        <div className='mt-4'>
        <p className='text-center text-slate-600 text-sm'>Have an Account ? <span onClick={() => Navigate("/login")} className='underline text-[#ff004f] cursor-pointer'>Login</span></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp