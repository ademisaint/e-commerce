'use client'

import React, { useState } from 'react'

const AddItems = () => {
    const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  }
  const decrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  }

  return (
    <div className='flex items-center bg-[#F2F0F1] rounded-full w-[30%] justify-center mr-3'>
        <button className='text-[25px] md:text-[20px] lg:text-[25px] rounded-l-full bg-[#F2F0F1] px-5 md:px-3 lg:px-5 py-1 ' onClick={decrease}>-</button>
        <div className='w-[24px] h-auto flex justify-center bg-[#F2F0F1] px-5 md:px-4 py-1'>
            <span className=''>{quantity}</span> 
        </div>
        <button className='text-[25px] md:text-[20px] lg:text-[25px] rounded-r-full bg-[#F2F0F1] px-5 md:px-3 lg:px-5 py-1' onClick={increase}>+</button>
    </div>
  )
}

export default AddItems