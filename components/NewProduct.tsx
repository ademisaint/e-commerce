import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Top from '../public/images/black t shirt.png'
import FemaleBag from '../public/images/female-bag.png'
import Jean from '../public/images/blue mens jeans.png'
import Bag from '../public/images/bagpng.png'
import Bag2 from '../public/images/bagpng2.png'
import BG from '../public/images/leather-bag-png.png'

const NewProduct = () => {
  return (
    <div className='py-[20px]'>
        <div className="flex overflow-x-auto flex-nowrap w-full">
            <Link href="/" className="w-[45%] sm:w-[30%] lg:w-[22%] px-[10px] py-[5px] flex-shrink-0">
                <div className="h-[200px] w-full relative bg-[#F2F0F1] rounded-[20px]">
                    <Image
                        src={Bag}
                        alt="backpack"
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px] z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                    />
                    <Image
                        src={Bag2}
                        alt="backpack"
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px]"
                    />
                </div>
                <div>
                    <p className="text-[16px] font-normal mt-2 line-clamp-1 tracking-tight">Men Business Backpack Fashion Rucksack High Quality Bagpack Large Capacity Multifunction Laptop Backpacks Schoolbag-ll</p>
                    <div className="flex items-center">
                    {/* Example rating stars */}
                    ⭐⭐⭐⭐⭐
                    </div>
                    <p className="text-[15px] lg:text-[20px] font-semibold">$50.00</p>
                </div>
            </Link>
            <Link href="/" className="w-[45%] sm:w-[30%] lg:w-[22%] px-[10px] py-[5px] flex-shrink-0">
                <div className="h-[200px] w-full relative bg-[#F2F0F1] rounded-[20px]">
                    {/* <Image
                        src={Top}
                        alt="backpack"
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                    /> */}
                    <Image
                        src={Top}
                        alt="backpack"
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px]"
                    />
                </div>
                <div>
                    <p className="text-[16px] font-normal mt-2 line-clamp-1 tracking-tight">Men Business Backpack Fashion Rucksack High Quality Bagpack Large Capacity Multifunction Laptop Backpacks Schoolbag-ll</p>
                    <div className="flex items-center">
                    {/* Example rating stars */}
                    ⭐⭐⭐⭐⭐
                    </div>
                    <p className="text-[15px] lg:text-[20px] font-semibold">$50.00</p>
                </div>
            </Link>
            <Link href="/" className="w-[45%] sm:w-[30%] lg:w-[22%] px-[10px] py-[5px] flex-shrink-0">
                <div className="h-[200px] w-full relative bg-[#F2F0F1] rounded-[20px]">
                    {/* <Image
                        src={Bag}
                        alt="backpack"
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px] z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                    /> */}
                    <Image
                        src={FemaleBag}
                        alt="backpack"
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px]"
                    />
                </div>
                <div>
                    <p className="text-[16px] font-normal mt-2 line-clamp-1 tracking-tight">Men Business Backpack Fashion Rucksack High Quality Bagpack Large Capacity Multifunction Laptop Backpacks Schoolbag-ll</p>
                    <div className="flex items-center">
                    {/* Example rating stars */}
                    ⭐⭐⭐⭐⭐
                    </div>
                    <p className="text-[15px] lg:text-[20px] font-semibold">$50.00</p>
                </div>
            </Link>
            <Link href="/" className="w-[45%] sm:w-[30%] lg:w-[22%] px-[10px] py-[5px] flex-shrink-0">
                <div className="h-[200px] w-full relative bg-[#F2F0F1] rounded-[20px]">
                    {/* <Image
                        src={Bag}
                        alt="backpack"
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px] z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                    /> */}
                    <Image
                        src={Jean}
                        alt="backpack"
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px]"
                    />
                </div>
                <div>
                    <p className="text-[16px] font-normal mt-2 line-clamp-1 tracking-tight">Men Business Backpack Fashion Rucksack High Quality Bagpack Large Capacity Multifunction Laptop Backpacks Schoolbag-ll</p>
                    <div className="flex items-center">
                    {/* Example rating stars */}
                    ⭐⭐⭐⭐⭐
                    </div>
                    <p className="text-[15px] lg:text-[20px] font-semibold">$50.00</p>
                </div>
            </Link>
            <Link href="/" className="w-[45%] sm:w-[30%] lg:w-[22%] px-[10px] py-[5px] flex-shrink-0">
                <div className="h-[200px] w-full relative bg-[#F2F0F1] rounded-[20px]">
                    {/* <Image
                        src={Bag}
                        alt="backpack"
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px] z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                    /> */}
                    <Image
                        src={BG}
                        alt="backpack"
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px]"
                    />
                </div>
                <div>
                    <p className="text-[16px] font-normal mt-2 line-clamp-1 tracking-tight">Men Business Backpack Fashion Rucksack High Quality Bagpack Large Capacity Multifunction Laptop Backpacks Schoolbag-ll</p>
                    <div className="flex items-center">
                    {/* Example rating stars */}
                    ⭐⭐⭐⭐⭐
                    </div>
                    <p className="text-[15px] lg:text-[20px] font-semibold">$50.00</p>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default NewProduct