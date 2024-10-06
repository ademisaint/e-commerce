"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Search from '../components/searchbox';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Archivo_Black  } from 'next/font/google';

import CartModal from '../components/cartModal';

const archivoBlack = Archivo_Black({
    subsets: ['latin'], 
    weight: '400',
    variable: '--font-archivo-black'
  });

const navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(true)
    const [isProfileOpen, setIsProfileOpen] = useState(false)


    const handleCart = () => {
        setIsCartOpen((prev) => !prev)
    }

    const handleCartClose = () => {
        setIsCartOpen(false)
        console.log(isCartOpen)
    }

    const handleProfile = () => {
        setIsProfileOpen((prev) => !prev)
    }

  return (
    <div className={`${archivoBlack.variable} flex justify-between items-center px-[100px] py-[20px]`}>
        <div className=' font-variable text-[35px] tracking-tighter'>SHOP.CO</div>
        <div className='hidden xl:flex px-[10px]'>
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
            <button className='relative px-4' onClick={handleCart}>
                <ShoppingCartOutlinedIcon className='w-[30px] h-[30px] cursor-pointer'/>
                <div className='absolute -top-2 right-2 w-[15px] h-[15px] flex items-center justify-center bg-red-600 rounded-full text-[13px] text-white'>2</div>
            </button>
            {isCartOpen && (
                <div className='absolute flex'>
                    <div>
                        <CartModal handleCartClose={handleCartClose}/>
                        {/* <button onClick={handleCartClose} className='absolute top-2 right-[200px]'>
                            <CloseIcon className='w-[24px] h-[24px] cursor-pointer' sx={{ color: red[500] }} />
                        </button> */}
                    </div>
                </div>
            )}
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