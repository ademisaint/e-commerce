import React from 'react'
import { Archivo_Black, Open_Sans } from 'next/font/google'
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
import Style from '../public/images/wait.png'
import { url } from 'inspector'

const openSans = Open_Sans({
    subsets: [],
    weight: '700',
})

const archivoBlack = Archivo_Black({
subsets: ['latin'], 
weight: '400',
variable: '--font-archivo-black'
});

const Categories = () => {
    const categories = [
        {
            src: Sports,
            name: 'Sports and Entertainment',
            url: '',
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
    <div>
        <div className="mt-[30px] pt-[15px] xl:pt-[30px] bg-[#F5F5F5]">
            <div className='flex justify-center'>
                <h1 className={`${openSans.className} text-[16px] lg:text-[28px] font-bold`}>Shop by categories</h1>
            </div>
            <div className='py-[15px] scroll-parent cursor-pointer'>
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

        <div className="px-[50px] lg:px-[200px] pt-[30px] xl:pt-[70px]">
            <div className="mt-[30px] p-[20px] xl:p-[50px] bg-[#F5F5F5] rounded-[20px]">
                <h1 className={`${archivoBlack.className} text-[20px] py-[10px] lg:text-[30px] flex justify-around tracking-tighter`}>BROWSE BY DRESS STYLE</h1>
                <div className='grid grid-cols-3 gap-6 pt-[15px]'>
                    <div className='bg-white relative rounded-[20px] flex justify-end'>
                        <Image src={Style} alt='Casual wears' className=''/>
                        <p className={`${openSans.className} absolute top-6 left-6 font-medium`}>Casual</p>
                    </div>
                    <div className='col-span-2 relative bg-white rounded-[20px] flex justify-end'>
                        <Image src={Style} alt='Casual wears' className=''/>
                        <p className={`${openSans.className} absolute top-6 left-6 font-medium`}>Formal</p>
                    </div>
                    <div className='col-span-2 relative bg-white rounded-[20px] flex justify-end'>
                        <Image src={Style} alt='Casual wears' className=''/>
                        <p className={`${openSans.className} absolute top-6 left-6 font-medium`}>Party</p>
                    </div>
                    <div className='bg-white relative rounded-[20px] flex justify-end '>
                        <Image src={Style} alt='Casual wears' className=''/>
                        <p className={`${openSans.className} absolute top-6 left-6 font-medium`}>Gym</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories