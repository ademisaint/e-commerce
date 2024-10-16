import { Open_Sans } from 'next/font/google'
import React from 'react'

const openSans = Open_Sans({
    subsets: [],
    weight: '600',
  })

const Filter = () => {
  return (
    <div className=' py-[15px] flex flex-wrap justify-between gap-4'>
        <div className=' w-full md:w-[70%] flex flex-wrap md:justify-between gap-2'>
            <select 
                name="type" 
                id="" 
                className= {`${openSans.className} rounded-2xl bg-[#F5F5F5] text-[12px] py-[5px] px-[5px] md:px-[10px] border-none outline-none`}
            >
                <option value="">Type</option>
                <option value="">Physical</option>
                <option value="">Digital</option>
            </select>
            <input 
                type="text" 
                placeholder='min price'
                name='min price'
                className={`${openSans.className} w-20 md:w-24 rounded-2xl ring-1 ring-[#cccccc] text-[12px] py-[5px] px-[5px] md:px-[10px] font-medium outline-none`}
            />
            <input 
                type="text" 
                placeholder='max price'
                name='max price'
                className={`${openSans.className} w-20 md:w-24 rounded-2xl ring-1 ring-[#cccccc] text-[12px] py-[5px] px-[5px] md:px-[10px] font-medium outline-none`}
            />
            <select 
                name="Size" 
                id="" 
                className= {`${openSans.className} rounded-2xl bg-[#F5F5F5] text-[12px] py-[5px] px-[5px] md:px-[10px] font-medium border-none outline-none`}
            >
                <option>Size</option>
                <option value="">small</option>
                <option value="">medium</option>
                <option value="">large</option>
            </select>
            <select 
                name="Color" 
                id="" 
                className= {`${openSans.className} rounded-2xl bg-[#F5F5F5] text-[12px] py-[5px] px-[5px] md:px-[10px] font-medium border-none outline-none`}
            >
                <option>Color</option>
                <option value="">White</option>
                <option value="">Black</option>
            </select>
            <select 
                name="Category" 
                id="" 
                className= {`${openSans.className} rounded-2xl bg-[#F5F5F5] text-[12px] py-[5px] px-[5px] md:px-[10px] font-medium border-none outline-none`}
            >
                <option value="">New Arrival</option>
                <option value="">Popular</option>
            </select>
            <select 
                name="All filters" 
                id="" 
                className= {`${openSans.className} rounded-2xl bg-[#F5F5F5] text-[12px] py-[5px] px-[10px] font-medium border-none outline-none`}
            >
                <option value="">Type</option>
                <option value="">Physical</option>
                <option value="">Digital</option>
            </select>
        </div>
        <div className=''>
            <select 
                name="sort by" 
                id="sort by"
                className={`${openSans.className} rounded-2xl bg-[#fff] ring-1 ring-[#cccccc] text-[12px] py-[5px] px-[10px] font-medium outline-none`}
            >
                <option>Sort By</option>
                <option value="">Price (low to high)</option>
                <option value="">Price (high to low)</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
            </select>
        </div>
    </div>
  )
}

export default Filter