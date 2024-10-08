import React from 'react'
// import versace from '../public/images/pngfind.com-versace-logo-png-614666.png'
// import gucci from '../public/images/gucci.png'
// import prada from '../public/images/PRADA.png'
// import CK from '../public/images/cK.png'
// import zara from '../public/images/ZARA.png'

const Tape = () => {
  return (
    <div>
        <div className="bg-black flex justify-between px-[100px] py-[20px] items-center">
            <img src="/images/pngfind.com-versace-logo-png-614666.png" alt="versace" className="h-[30px] " />
            <img src="/images/ZARA.png" alt="ZARA" className="h-[30px]"/>
            <img src="/images/gucci.png" alt="Gucci" className="h-[30px]"/>
            <img src="/images/PRADA.png" alt="prada" className="h-[30px]"/>
            <img src="/images/CK.png" alt="Calvin Klein" className="h-[40px]" />
        </div>
    </div>
  )
}

export default Tape