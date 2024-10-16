import ProductImages from '@/components/ProductImages'
import React from 'react'

const ItemPage = () => {
  return (
    <div className='px-[50px] lg:px-[200px] pt-[10px] xl:pt-[30px] flex flex-col gap-2 md:flex-row'>
        {/* Image */}
        <div className='w-full md:w-[49%] top-10 md:sticky h-max'>
            <ProductImages/>
        </div>
        {/* Text */}
        <div className='w-full md:w-[49%] flex flex-col gap-6'>
            TEXT
        </div>
    </div>
  )
}

export default ItemPage