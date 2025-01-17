import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  return (
    <div className='bg-[#F2F0F1] px-4 border rounded-[40px]'>
        <SearchIcon color='disabled'/>
        <input 
            type="text" 
            name="" 
            id="standard" 
            placeholder='search for products...'
            className=' px-2 border-0 bg-inherit outline-none w-[500px] h-[50px] text-[#858585]'
        />
    </div>
  )
}

export default SearchBox
