import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Signup from './Components/Signup';
import Login from './Components/Login';

const NavBar = () => {
  return (
    <>

      {/* <header className="bg-my-red body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <span className="ml-3 text-2xl text-white font-bold"> <Link to={'/'}>To-Do List</Link></span>
  
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={'/'} className="mr-5 hover:text-gray-900 cursor-pointer text-white">Home</Link>
          <Link to={'/about'} className="mr-5 hover:text-gray-900 cursor-pointer text-white">About</Link>
            <Link to={'/contact'} className="mr-5 hover:text-gray-900 cursor-pointer text-white">Contact</Link>
          </nav>
          <button className="inline-flex items-center bg-my-brown border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log-in

          </button>
        </div>
      </header> */}
      <div className='font-custom'>

      <Routes>
        <Route path='/signin' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Navigate to={'/home'} />} />
      </Routes>
      </div>
    </>
  )
}

export default NavBar
