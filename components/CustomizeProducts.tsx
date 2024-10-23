'use client'

import React, { useState } from 'react'

const CustomizeProducts = () => {
    const [selectedColor, setSelectedColor] = useState(1);
    const [selectedSize, setSelectedSize] = useState('')

    const colors = [
        { id: 1, color: '#000000' },
        { id: 2, color: '#BAC0C4' },
        { id: 3, color: '#FFFFFF' },
    ];

    const sizes = ['sm', 'md', 'lg', 'xl', '2xl', '3xl'];

    const handleColorSelect = (colorId:number) => {
        setSelectedColor(colorId);
    };

    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
      };
    
  return (
    <div className='flex flex-col'>
        <h4 className='text-[15px] xl:text-[15px] text-gray-400'>Select color</h4>
        <div className='flex items-center pt-2 gap-2'>
            {colors.map((color) => (
                <div
                    key={color.id}
                    onClick={() => handleColorSelect(color.id)}
                    className={`w-[30px] h-[30px] rounded-full cursor-pointer flex justify-center items-center border-2 border-gray-500
                        ${selectedColor === color.id ? 'border-gray-300 relative' : ''}
                    `}
                    style={{ backgroundColor: color.color }}
                >
                    {selectedColor === color.id && (
                        <span 
                            className={` ${color.color === '#FFFFFF' ? 'text-black' : ''}text-white text-xl`}
                        >
                            ✓
                        </span>
                    )}
                </div>
            ))}
        </div>
        <div className='h-[2px] bg-gray-200 my-2'/>
        <h4 className='text-[15px] xl:text-[15px] text-gray-400'>Choose Size</h4>
        <div className="flex items-center pt-2 gap-4 flex-wrap">
            {sizes.map((size) => (
                <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`px-4 py-[5px] rounded-full cursor-pointer border 
                        ${selectedSize === size ? 'bg-black text-white' : 'bg-[#F5F5F5] text-black'}
                    `}
                >
                    {size.toUpperCase()}
                </button>
            ))}
        </div>
    </div>
  )
}

export default CustomizeProducts