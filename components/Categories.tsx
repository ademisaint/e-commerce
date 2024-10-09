import React from 'react'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Sports from '../public/images/sports.png'
import Computer from '../public/images/Computer.png'
import HomeAppliance from '../public/images/Home Appliances.png'
import Gardens from '../public/images/Home and garden.png'
import Costume from '../public/images/costume.png'
import Electronics from '../public/images/electronics.png'
import Luggages from '../public/images/Luggages.png'
import Pet from '../public/images/Pet Supplies.png'
import Babies from '../public/images/Babies.png'
import MensCloth from '../public/images/mens cloth.png'

const openSans = Open_Sans({
    subsets: [],
    weight: '700',
  })

const Categories = () => {
    const categories = [
        {
            src: Sports,
            name: 'Sports and Entertainment',
        },
        {
            src: Computer,
            name: 'Computer, Office & Education',
        },
        {
            src: HomeAppliance,
            name: 'Home Appliances',
        },
        {
            src: Gardens,
            name: 'Home & Gardens',
        },
        {
            src: Costume,
            name: 'Special Occasion Costume',
        },
        {
            src: Electronics,
            name: 'Consumer Electronics',
        },
        {
            src: Luggages,
            name: 'Luggages & Bags',
        },
        {
            src: Pet,
            name: 'Pet Supplies',
        },
        {
            src: Babies,
            name: 'Babies & Kids',
        },
        {
            src: MensCloth,
            name: 'Mens Clothing',
        },
    ]

  return (
    <div className=''>
        <div className='flex justify-center'>
            <h1 className={`${openSans.className} text-[16px] lg:text-[28px] font-bold`}>Shop by categories</h1>
        </div>
        <div className='py-[15px] overflow-x-hidden scroll-parent cursor-pointer'>
            <div className='flex my-[30px] scroll-element primary'>
                {categories.map((category, index) => (
                    <Link href='/' key={index} className='w-[140px] h-[180px] mx-[12px] flex flex-shrink-0'>
                        <div className='h-full relative w-full flex flex-col items-center'>
                            <div className='w-[108px] h-[108px] rounded-full bg-[#F2F0F1] flex justify-center items-center mx-auto'>
                                <Image src={category.src} alt={category.name} width={108} height={108} />
                            </div>
                            <span>
                                <p className='mt-[10px] text-center text-[16px] font-medium'>{category.name}</p>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex my-[30px] scroll-element secondary'>
                {categories.map((category, index) => (
                    <Link href='/' key={index} className='w-[140px] h-[180px] mx-[12px] flex flex-shrink-0'>
                        <div className='h-full relative w-full flex flex-col items-center'>
                            <div className='w-[108px] h-[108px] rounded-full bg-[#F2F0F1] flex justify-center items-center mx-auto'>
                                <Image src={category.src} alt={category.name} width={108} height={108} />
                            </div>
                            <span>
                                <p className='mt-[10px] text-center text-[16px] font-medium'>{category.name}</p>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Categories