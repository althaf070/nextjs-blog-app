import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-around p-5 shadow-sm'>
        <div>
           <Link href={'/'} className='text-2xl'>Meta <span className='font-bold'>Blog</span></Link>
        </div>
        <div className='hidden md:block'>
            <ul className='flex gap-[10px] text-gray-600 text-[16px]'>
                <li>Home</li>
                <li>Blog</li>
                <li>Single Post</li>
                <li>Pages</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <input type="text" className="flex h-10 w-full rounded-md bg-gray-200 px-3 py-2 text-base ring-offset-background md:text-sm outline-0" placeholder='Search..'/>
        </div>

    </nav>
  )
}
