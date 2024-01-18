import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <span >Home</span>
        <div className='flex flex-1'></div>
        <Link className='flex-initial p-2 m-1 bg-blue-300 hover:bg-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300' href="/pricing">Pricing</Link>
        <Link className='flex-initial p-2 m-1 bg-blue-300 hover:bg-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300' href="/contact">Contact</Link>
        <Link className='flex-initial p-2 m-1 bg-blue-300 hover:bg-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300' href="/about">About</Link>
    </nav>
  )
}