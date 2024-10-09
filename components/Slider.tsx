import React from 'react'
// import BG from '../public/images/bg.png'
import { Divider } from "@mui/material";
import { Archivo_Black  } from 'next/font/google';

const archivoBlack = Archivo_Black({
    subsets: ['latin'], 
    weight: '400',
    variable: '--font-archivo-black'
  });

const Slider = () => {
  return (
    <div>
        <div className="bg-[#F2F0F1]">
            <div className="lg:flex justify-between px-[50px] lg:px-[100px] pt-[10px]">
                <div className="">
                    <h1 className={`${archivoBlack.className} font-semibold lg:font-bold text-[40px] lg:text-[70px] tracking-tighter pt-[30px] lg:pt-[65px] pb-[15px] leading-[60px]`}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className="text-[17px] text-[#858585] py-[15px] pr-[25px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style</p>
                    <div className="py-[15px]">
                        <button className="text-[#fff] text-[18px] bg-[#000] px-[70px] py-[12px] rounded-full font-thin">Shop Now</button>
                    </div>
                    <div className="flex justify-between py-[20px]">
                        <div className="px-[10px] text-center md:text-left">
                            <h1 className={`${archivoBlack.className} text-[20px] md:text-[40px]`}>200+</h1>
                            <p className="text-[10px] md:text-[17px] text-[#858585] ">International Brands</p>
                        </div>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <div className="px-[10px]">
                            <h1 className={`${archivoBlack.className} text-[20px] md:text-[40px]`}>2000+</h1>
                            <p className="text-[10px] md:text-[17px] text-[#858585] ">High-Quality Products</p>
                        </div>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <div className="px-[10px]">
                            <h1 className={`${archivoBlack.className} text-[20px] md:text-[40px]`}>30,000+</h1>
                            <p className="text-[10px] md:text-[17px] text-[#858585] ">Happy Customers</p>
                        </div>
                    </div>
                </div>
                <img src="/images/bg.png" alt="bg" className="w-[700px] h-[610px]" />
            </div>
        </div>
    </div>
  )
}

export default Slider