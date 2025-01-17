"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Search from './SearchBox';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Archivo_Black  } from 'next/font/google';

import CartModal from './CartModal';
import { signOut } from 'next-auth/react';

const archivoBlack = Archivo_Black({
    subsets: ['latin'], 
    weight: '400',
    variable: '--font-archivo-black'
  });

const NavBar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)


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

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    useEffect (() => {
        if (isMobileMenuOpen) {
            console.log('menu is opened')
        } else {
            console.log('menu is closed')
        }
    },[isMobileMenuOpen])

  return (
    <div className={`${archivoBlack.variable} flex justify-between items-center px-[50px] lg:px-[100px] py-[10px] lg:py-[20px] sticky`}>
        <div className=' font-variable text-[15px] lg:text-[35px] tracking-tighter'><Link href='/'>SHOP.CO</Link></div>
        <div className='hidden xl:flex px-[10px]'>
            <div className='relative group'>
                <p className='px-[15px] font-[550] cursor-pointer'>shop</p>
                <div className=' absolute flex flex-col top-[50px] right-0 bg-white shadow-md p-4 rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible'>
                    <Link href='/ItemPage'>Shoes</Link>
                    <Link href='/ItemPage'>Bags</Link>
                    <Link href='/ItemPage'>Wears</Link>
                </div>
            </div>
            <p className='px-[15px] font-[550]'><Link href='/ListPage'>onSale</Link></p>
            <p className='px-[15px] font-[550]'><Link href='/Products'>New Arrival</Link></p>
            <p className='px-[15px] font-[550]'>Branch</p>
        </div>
        <div className='hidden lg:block'>
            <Search />
        </div>
        <div className='relative flex items-center space-x-4 lg:space-x-6'>
            <button className='relative px-2 lg:px-4' onClick={handleCart}>
                <ShoppingCartOutlinedIcon className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] cursor-pointer'/>
                <div className='absolute -top-2 right-2 w-[15px] h-[15px] flex items-center justify-center bg-red-600 rounded-full text-[10px] lg:text-[13px] text-white'>2</div>
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
            <button onClick={handleProfile} className=' px-2 lg:px-4'>
                <AccountCircleOutlinedIcon className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] cursor-pointer'/>
            </button>
            {isProfileOpen && (
                <div className='absolute top-[50px] right-0 bg-white shadow-md p-4 rounded-md'>
                    <Link href="/">Profile</Link>
                    <div>
                        <button className='cursor-pointer' onClick={() => signOut({callbackUrl : ''})}>
                            Logout
                        </button>
                    </div>
                    
                </div>
            )}
        </div>
        <div className='lg:hidden'>
            <button onClick={toggleMobileMenu} className="text-[30px]">
                {isMobileMenuOpen ? (<CloseIcon/>) : (<MenuIcon/>)}
            </button>
        </div>

        {isMobileMenuOpen && (
            <div className="absolute top-[60px] right-0 w-full bg-white shadow-md rounded-md p-4 flex flex-col space-y-4">
                <Link href='/' className='text-lg font-medium'>Shop</Link>
                <Link href='/' className='text-lg font-medium'>On Sale</Link>
                <Link href='/' className='text-lg font-medium'>New Arrival</Link>
                <Link href='/' className='text-lg font-medium'>Branch</Link>
            </div>
        )}

    </div>
  )
}

export default NavBar
