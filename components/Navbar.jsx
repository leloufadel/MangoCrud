import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-8 py-3 bg-slate-800'>
      {/* <div className="bg-black px-12 py-12"> */}
        <Link className='text-white font-bold' href='/'> GTCoding </Link>
       <Link className="bg-white p-2"  href='/addTopic'> AddTopic </Link>
      {/* </div> */}
    </nav>
  )
}
