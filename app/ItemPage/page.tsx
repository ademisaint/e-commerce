import CustomizeProducts from '@/components/CustomizeProducts';
import ProductImages from '@/components/ProductImages'
import { Archivo_Black, Open_Sans } from 'next/font/google';
import React from 'react'

const archivoBlack = Archivo_Black({
    subsets: ['latin'], 
    weight: '400',
    variable: '--font-archivo-black'
});

const openSans = Open_Sans({
    subsets: [],
    weight: '500',
})

const ItemPage = () => {
  return (
    <div className='px-[50px] lg:px-[200px] pt-[10px] xl:pt-[30px] flex-col '>
        <div className='flex flex-col gap-6 md:flex-row'>
            {/* Image */}
            <div className='w-full md:w-[48%] top-10 md:sticky h-max'>
                <ProductImages/>
            </div>
            {/* Text */}
            <div className='w-full md:w-[47%] flex flex-col gap-1'>
                <h1 className={`${archivoBlack.className}  tracking-tight text-[25px] xl:text-[40px]`}>PRODUCT NAME</h1>
                <div>rating</div>
                <div className='flex items-center gap-4'>
                    <h2 className='text-[25px] xl:text-[35px]'>$260</h2>
                    <h3 className='text-[15px] xl:text-[25px] text-gray-400 line-through'>$300</h3>
                </div>
                <p className={`${openSans.className} text-gray-500`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odit totam delectus explicabo sed illo, maiores, est repellendus perspiciatis ea distinctio error ex molestias, iure inventore odio numquam sit accusamus?</p>
                <div className='h-[2px] bg-gray-200 my-4'/>
                <CustomizeProducts/>
                <div className='h-[2px] bg-gray-200 my-4'/>
            </div>
        </div>
        <div>
            review
        </div>
    </div>
  )
}

export default ItemPage