'use client'

import React from 'react'

const CustomizeProducts = () => {
  return (
    <div className='flex flex-col'>
        <h4 className='text-[15px] xl:text-[25px] text-gray-400'>Select color</h4>
        <div className='flex items-center'></div>
        <div className='h-[2px] bg-gray-200 my-4'/>
        <h4 className='text-[15px] xl:text-[25px] text-gray-400'>Choose Size</h4>
        <div className='flex items-center'></div>
    </div>
  )
}

export default CustomizeProducts