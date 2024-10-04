"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Search from '../components/searchbox';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Archivo_Black  } from 'next/font/google';

const archivoBlack = Archivo_Black({
    subsets: ['latin'], 
    weight: '400',
    variable: '--font-archivo-black'
  });

const navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)


    const handleCart = () => {

    }

    const handleProfile = () => {
        setIsProfileOpen((prev) => !prev)
    }

  return (
    <div className={`${archivoBlack.variable} flex justify-between items-center px-[100px] py-[20px]`}>
        <div className=' font-variable text-[35px] tracking-tighter'>SHOP.CO</div>
        <div className='flex px-[10px] '>
            <div className='relative group'>
                <p className='px-[15px] font-[550]'>shop</p>
                <div className='absolute flex flex-col top-[50px] right-0 bg-white shadow-md p-4 rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible'>
                    <Link href='/'>Shoes</Link>
                    <Link href='/'>Bags</Link>
                    <Link href='/'>Wears</Link>
                </div>
            </div>
            <p className='px-[15px] font-[550]'>On sale</p>
            <p className='px-[15px] font-[550]'>New Arrival</p>
            <p className='px-[15px] font-[550]'>Branch</p>
        </div>
        <Search/>
        <div className='relative'>
            <button className=' px-4' onClick={handleCart}>
                <ShoppingCartOutlinedIcon className='w-[30px] h-[30px] cursor-pointer'/>
            </button>
            <button onClick={handleProfile} className=' px-4'>
                <AccountCircleOutlinedIcon className='w-[30px] h-[30px]'/>
            </button>
            {isProfileOpen && (
                <div className='absolute top-[50px] right-0 bg-white shadow-md p-4 rounded-md'>
                    <Link href="/">Profile</Link>
                    <div><p>Logout</p></div>
                </div>
            )}
        </div>
        
    </div>
  )
}

export default navbar