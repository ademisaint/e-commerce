import React, { useState } from 'react'
import Image from 'next/image'
import bag from '../public/images/bagpng.png'
// import bag2 from '../public/images/bagpng2.png'
import CloseIcon from '@mui/icons-material/Close';
import red from '@mui/material/colors/red';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined'

interface CartModalProps {
  handleCartClose: () => void;  // This defines that handleCartClose is a function
}


const cartModal: React.FC<CartModalProps> = ({handleCartClose}) => {
  const cartItems = true
  const [checked, setChecked] = useState([true, false])

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
      <div className='bg-white border shadow-lg w-[300px] h-[500px] p-[30px] rounded-lg lg:w-[600px]'>
        {!cartItems ? (
          <div className=''>No items yet? Continue shopping to explore more...</div>
        ) : (
          <div>
            <div className='flex justify-between items-center'>
              <h1 className='text-[25px] font-semibold font-mono'>Shopping Cart(1)</h1>
              <button onClick={handleCartClose} className='top-2 right-2 hover:bg-[#F2F0F1] rounded-full p-2 '>
                <CloseIcon className='w-[24px] h-[24px] cursor-pointer ' sx={{ color: red[500] }} />
              </button>
            </div>
            
            <div className='flex items-center'>
              <input type="checkbox" name="selectAll" id="" className='w-[20px] h-[20px]' />
              <p className='py-[20px] '>Select all items</p>
            </div>
            <div className=' flex'>
              <div className=' xl:w-[150px] xl:h-[150px] relative bg-[#F2F0F1] rounded-md'><Image src={bag} alt="Bag Image" layout="fill" objectFit="contain" className=' rounded-md' /></div>
              
              <div className='px-4 py-1'>
                <div className='flex flex-row justify-between items-center'>
                  <h1 className='xl:text-[25px] xl:font-semibold xl:font-mono'>Men's backpack</h1>
                  <button>
                    <DeleteOutlined sx={{ color: red[500] }}/>
                  </button>
                </div>
                <p>size: Large</p>
                <p>Color: White</p>
                <div className='flex'>
                  <p>$48</p>
                  <div>
                    plus
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default cartModal