import React from 'react'
import Image from 'next/image'

const ProductImages = () => {
  return (
    <div className='flex justify-between'>
        <div className="flex flex-col justify-between w-[20%] gap-2">
            <div className="h-1/3">
            <Image
                src="/images/item12b.jpg"
                alt="item12"
                width={120}
                height={200}
                className="object-cover bg-[#F2F0F1] rounded-[20px]"
            />
            </div>
            <div className="h-1/3">
            <Image
                src="/images/item12.png"
                alt="item12"
                width={120}
                height={200}
                className="object-cover bg-[#F2F0F1] rounded-[20px]"
            />
            </div>
            <div className="h-1/3">
            <Image
                src="/images/item13b.jpg"
                alt="item13b"
                width={120}
                height={200}
                className="object-cover bg-[#F2F0F1] rounded-[20px]"
            />
            </div>
        </div>
        <div className="h-[400px] w-[65%] relative bg-[#F2F0F1] rounded-[20px]">
            <Image
            src="/images/item13.png"
            alt="item13"
            fill
            className="object-cover rounded-[15px]"
            />
        </div>
    </div>
  )
}

export default ProductImages