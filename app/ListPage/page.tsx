

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Filter from '@/components/Filter'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
    subsets: [],
    weight: '700',
  })

const ListPage = () => {
    const items = [
        {
          src: '',
          url: '/images/item1.png',
          name: 'Men Business Backpack Fashion Rucksack High Quality Bagpack Large Capacity Multifunction Laptop Backpacks Schoolbag-ll',
          rating: '⭐⭐⭐⭐⭐',
          price: '$50.00',
        },
        {
          src: '',
          url: '/images/item2.png',
          name: 'Casual Wear T-Shirt Cotton Slim Fit for Men',
          rating: '⭐⭐⭐⭐',
          price: '$20.00',
        },
        {
          src: '',
          url: '/images/item3.png',
          name: 'Women’s Designer Handbag Leather Tote Bag',
          rating: '⭐⭐⭐⭐⭐',
          price: '$120.00',
        },
        {
          src: '',
          url: '/images/item4.png',
          name: 'Sport Running Shoes for Men Lightweight Comfortable',
          rating: '⭐⭐⭐⭐',
          price: '$70.00',
        },
        {
          src: '',
          url: '/images/item5.png',
          name: 'Luxury Watch for Men Chronograph Waterproof',
          rating: '⭐⭐⭐⭐⭐',
          price: '$350.00',
        },
        {
          src: '',
          url: '/images/item6.png',
          name: 'Wireless Bluetooth Headphones Noise Cancelling',
          rating: '⭐⭐⭐⭐',
          price: '$85.00',
        },
        {
          src: '',
          url: '/images/item7.png',
          name: 'Gaming Laptop High-Performance 16GB RAM',
          rating: '⭐⭐⭐⭐⭐',
          price: '$1200.00',
        },
        {
          src: '',
          url: '/images/item8.png',
          name: '4K Smart TV Ultra HD 55 Inches with HDR',
          rating: '⭐⭐⭐⭐⭐',
          price: '$550.00',
        },
        {
          src: '',
          url: '/images/item9.png',
          name: 'Portable Charger Power Bank 20000mAh',
          rating: '⭐⭐⭐⭐⭐',
          price: '$40.00',
        },
        {
          src: '',
          url: '/images/item10.png',
          name: 'Men’s Leather Wallet RFID Blocking Bifold',
          rating: '⭐⭐⭐⭐',
          price: '$25.00',
        },
        {
          src: '',
          url: '/images/item11.png',
          name: 'Wireless Earbuds with Charging Case',
          rating: '⭐⭐⭐⭐',
          price: '$60.00',
        },
        {
          src: '/images/item12.png',
          url: '/images/item12b.jpg',
          name: 'Women’s Summer Dress Floral Print Casual',
          rating: '⭐⭐⭐⭐',
          price: '$35.00',
        },
        {
          src: '/images/item13.png',
          url: '/images/item13b.jpg',
          name: 'Stainless Steel Water Bottle with Insulation',
          rating: '⭐⭐⭐⭐⭐',
          price: '$18.00',
        },
        {
          src: '',
          url: '/images/item14.png',
          name: 'Smartphone Android 5G 128GB Dual SIM',
          rating: '⭐⭐⭐⭐',
          price: '$650.00',
        },
        {
          src: '/images/item15.png',
          url: '/images/item15b.jpg',
          name: 'Women’s Fashion Sneakers Breathable Comfort',
          rating: '⭐⭐⭐⭐',
          price: '$75.00',
        },
        {
          src: '',
          url: '/images/item16.png',
          name: 'Men’s Winter Jacket Waterproof with Hood',
          rating: '⭐⭐⭐⭐⭐',
          price: '$100.00',
        },
    ];
  return (
    <div className='px-[50px] lg:px-[200px] pt-[10px] xl:pt-[30px]'>
        <div className=' hidden bg-pink-50 sm:flex justify-between h-64 rounded-[20px] px-[50px]'>
            <div className='w-2/3 flex flex-col items-center justify-center'>
                <h1 className=' font-semibold text-3xl leading-[48px] text-gray-700'>Grab up to 50% off on <br /> Selected Products</h1>
                <button className='rounded-full text-white bg-pink-400 w-max py-3 px-5 text-sm mt-2'>Buy Now </button>
            </div>
            <div className='relative w-1/3'>
                <Image
                    src='/images/woman.png'
                    alt="woman"
                    className="object-contain"
                    layout='fill'
                />
            </div>
        </div>
        <div className='py-[15px]'>
            <Filter/>
        </div>
        <div>
            <div className={`${openSans.className} rounded-2xl text-xl py-[5px] px-[10px] font-medium border-none outline-none`}>
                <h1>All Products for You!</h1>
            </div>
            <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap py-[20px] md:py-[40px]">
                {items.map((items, index) => (
                    <Link 
                        href="/" 
                        key={index}
                        className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] px-[10px] py-[5px] flex-shrink-0"
                    >
                        <div className="h-[200px] w-full relative bg-[#F2F0F1] rounded-[20px]">
                            {items.src && (
                                <Image
                                    src={items.src}
                                    alt="backpack"
                                    className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                                    layout='fill'
                                />
                            )}
                            {items.url && (
                                <Image
                                    src={items.url}
                                    alt="backpack"
                                    className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px]"
                                    layout='fill'
                                />
                            )}
                        </div>
                        <div>
                            <p className="text-[16px] font-normal mt-2 line-clamp-1 tracking-tight">{items.name}</p>
                            <div className="flex items-center">
                            {/* Example rating stars */}
                            ⭐⭐⭐⭐⭐
                            </div>
                            <p className="text-[15px] lg:text-[20px] font-semibold">{items.price}</p>
                        </div>
                    </Link>  
                ))}
            </div>
        </div>
    </div>
  )
}

export default ListPage