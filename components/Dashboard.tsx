"use client"

import React, { useContext, useEffect } from 'react'
import {signIn, useSession} from "next-auth/react"
// import { signup } from '@/app/actions/auth'
import { Router } from "next/router";
import Slider from "@/components/Slider";
import Tape from "@/components/Tape";
import ProductList from "@/components/ProductList";
import NewProduct from "@/components/NewProduct";
import Categories from "@/components/Categories";
import { Archivo_Black  } from 'next/font/google';
import Divider from "@mui/material/Divider";
import { Google, GitHub } from '@mui/icons-material';
import { WixClientContext } from '@/context/wixContext';

const archivoBlack = Archivo_Black({
    subsets: ['latin'], 
    weight: '400',
    variable: '--font-archivo-black'
  });

const Dashboard = () => {
    const { data: session} = useSession();

    // if (!session) {
    //     return <p>Loading...</p>; // or redirect to login
    // }

    const wixClient = useContext(WixClientContext)

    useEffect (() => {
        const getProducts = async() => {
            const res = await wixClient.products.queryProducts().find();

            console.log(res)
        }

        getProducts();
    }, [wixClient])
    
    

  return (
    <>
        {session ? (
            <>
                <Slider/>
                <Tape/>
                <div className="px-[50px] lg:px-[200px] pt-[30px] xl:pt-[70px]">
                    <h1 className={`${archivoBlack.className} text-[20px] pt-[10px] lg:text-[45px] flex justify-around tracking-tighter`}>NEW ARRIVALS</h1>
                    <NewProduct/>
                </div>
                <Divider orientation="horizontal" variant="middle" className="mx-[90px] lg:mx-[250px] pt-[25px]" />
                <div className="px-[50px] pt-[30px] xl:pt-[70px]">
                    <h1 className={`${archivoBlack.className} text-[20px] pt-[10px] lg:text-[45px] flex justify-around tracking-tighter`}>TOP SELLING</h1>
                    <ProductList/>
                </div>
                {/* <Divider orientation="horizontal" variant="middle" className="mx-[90px] lg:mx-[250px] pt-[25px]" /> */}
                <div>
                    <Categories/>
                </div>
            </>
        ): (
            <div className='px-[30%] py-[10%]'>
                <h1 className=' text-center text-2xl font-semibold'>You're not logged In!!!</h1>
                <div className='flex flex-col gap-4 items-center w-full justify-between pt-5'>
                    <button onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000' })} className="px-4 py-2 bg-black flex justify-between w-[40%] text-white rounded-lg"> <span><GitHub/></span>Sign In with GitHub</button>
                    <button onClick={() => signIn('google')} className="px-4 py-2 bg-black flex justify-between w-[40%] text-white rounded-lg"> <span><Google/></span>Sign In with Google</button>
                </div>

            </div>
        )}
    </>
  )
}

export default Dashboard