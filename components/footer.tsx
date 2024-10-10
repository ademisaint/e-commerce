import React from 'react'
import { Archivo_Black, Open_Sans } from 'next/font/google'
import { EmailOutlined } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import Facebook from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const openSans = Open_Sans({
  subsets: [],
  weight: '500',
})

const archivoBlack = Archivo_Black({
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-archivo-black'
});

const Footer = () => {
  return (
    <div className="mt-[150px] pt-[15px] xl:pt-[30px] bg-[#F5F5F5] relative">
        <div className=' relative px-[50px] lg:px-[200px] w-[100%] -mt-[100px] z-10'>
          <div className=' bg-black p-[20px] lg:p-[35px] flex justify-between rounded-[20px]'>
            <div className='w-[45%]'>
              <h1 className={`${archivoBlack.className} text-[20px] lg:text-[30px] text-white`}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>
            <div className='w-[30%] flex flex-col justify-between'>
              <div className='flex items-center justify-between bg-white rounded-[20px] px-[10px]'>
                <EmailOutlined className='text-[#a9a7a7] w-[10%]'/>
                <input type="email" name="email" id="email" placeholder='Enter your email address' className='rounded-[20px] h-[40px] w-[85%]' />
              </div>
              <div className=' w-full'>
                <button className={`${openSans.className} bg-white rounded-[20px] w-full h-full font-normal p-[8px]`}> Subscribe to Newsletter</button>
              </div>
              
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between px-[50px] lg:px-[100px] py-[40px]">
          <div className='w-[100%] py-[20px]'>
            <div className='flex justify-between w-full'>
              <div className='w-[20%]'>
                <div className={`${archivoBlack.className}text-[15px] lg:text-[35px] tracking-tighter`} >SHOP.CO</div>
                <p className={`text-[#737373] text-[14px] py-[25px] ${openSans.className}`}>We have clothes that suits your style and which you're proud to wear. From men to women.</p>
                <div className='flex p-[15px] justify-between'>
                  <XIcon/>
                  <InstagramIcon/>
                  <Facebook/>
                  <GitHubIcon/>
                </div>
              </div>
              <div className='w-[13%]'>
                <h1 className={`${openSans.className} font-bold font-mono tracking-wider`}>COMPANY</h1>
                <div className='flex flex-col text-[#737373] justify-between'>
                  <a href="/" className=''>About</a>
                  <a href="/">Features</a>
                  <a href="/">Works</a>
                  <a href="/">Career</a>
                </div>
              </div>
              <div className='w-[13%]'>
                <h1 className={`${openSans.className} font-bold font-mono tracking-wider`}>HELP</h1>
                <div className='flex flex-col text-[#737373] justify-between'>
                  <a href="/">Customer Support</a>
                  <a href="/">Delivery Details</a>
                  <a href="/">Terms & Conditions</a>
                  <a href="/">Privacy Policy</a>
                </div>
              </div>
              <div className='w-[13%]'>
                <h1 className={`${openSans.className} font-bold font-mono tracking-wider`}>FAQ</h1>
                <div className='flex flex-col text-[#737373] justify-between'>
                  <a href="/">Accounts</a>
                  <a href="/">Manage Deliveries</a>
                  <a href="/">Orders</a>
                  <a href="/">Payments</a>
                </div>
              </div>
              <div className='w-[15%]'>
                <h1 className={`${openSans.className} font-bold font-mono tracking-wider`}>RESOURCES</h1>
                <div className='flex flex-col text-[#737373] justify-between'>
                  <a href="/">Free eBooks</a>
                  <a href="/">Development Tutorial</a>
                  <a href="/">How to - Blog</a>
                  <a href="/">Youtube Playlist</a>
                </div>
              </div>
            </div>
            <Divider orientation='horizontal' />
            <div>
              <p className={`${openSans.className} text-[#737373]`}>Shop.Co</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer