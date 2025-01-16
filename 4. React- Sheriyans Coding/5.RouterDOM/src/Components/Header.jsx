import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='py-7 flex items-center justify-between bg-pink-700 text-pink-100 text-2xl text-semibold'>
        <h2 className='text-3xl px-9'> Welcome to Tanaya.jsx</h2>
        <div className='flex py-2 px-4 gap-10 underline'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/Signin'>Signin</Link>
          <Link to='/Signup'>Signup</Link>
          <Link to='/enquire'>Enquire</Link>
            
        </div>
    </div>
  )
}

export default Header