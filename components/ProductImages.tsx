'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const ProductImages = () => {
    const image = [
        {
            id: 1,
            url: '/images/6.jpg',
            alt: '6'
        },
        {
            id: 2,
            url: '/images/5.jpg',
            alt: '5'
        },
        {
            id: 3,
            url: '/images/4.jpg',
            alt: '4'
        },
        // {
        //     id: 4,
        //     url: '/images/3.jpg',
        //     alt: '4'
        // },
    ]

    const [index, setIndex] = useState(0)

  return (
    <div className='flex justify-between'>
        <div className="w-[28%] flex flex-col justify-between gap-2">
            {image.map((img,i) => (
                <div 
                    className="h-1/3 cursor-pointer" 
                    key={img.id}
                    onClick={()=> setIndex(i)}
                >
                    <Image
                        src={img.url}
                        alt={img.alt}
                        width={150}
                        height={150}
                        className="object-cover bg-[#F2F0F1] rounded-[20px]"
                    />
                </div>
            ))}
        </div>
        <div className="w-[70%]  relative bg-[#F2F0F1] rounded-[20px]">
            <Image
            src={image[index].url}
            alt="item13"
            fill
            className="object-cover rounded-[15px]"
            />
        </div>
    </div>
  )
}

export default ProductImages