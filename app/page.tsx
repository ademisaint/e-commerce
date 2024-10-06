import { Router } from "next/router";
import BG from '../public/images/bg.png'
import versace from '../public/images/pngfind.com-versace-logo-png-614666.png'
import gucci from '../public/images/gucci.png'
import prada from '../public/images/PRADA.png'
import CK from '../public/images/cK.png'
import zara from '../public/images/ZARA.png'
import { Archivo_Black  } from 'next/font/google';
import { Divider } from "@mui/material";

const archivoBlack = Archivo_Black({
    subsets: ['latin'], 
    weight: '400',
    variable: '--font-archivo-black'
  });

export default function Home() {
  return (
    <div>
      <div className="bg-[#F2F0F1]">
        <div className="lg:flex justify-between px-[100px] pt-[10px]">
          <div className="">
            <h1 className={`${archivoBlack.className} font-bold text-[70px] tracking-tighter pt-[65px] pb-[15px] leading-[60px]`}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-[17px] text-[#858585] py-[15px] pr-[25px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style</p>
            <div className="py-[15px]">
              <button className="text-[#fff] text-[18px] bg-[#000] px-[70px] py-[12px] rounded-full font-thin">Shop Now</button>
            </div>
            <div className="flex py-[25px]">
              <div className="px-[10px]">
                <h1 className={`${archivoBlack.className} text-[40px]`}>200+</h1>
                <p className="text-[17px] text-[#858585] ">International Brands</p>
              </div>
              <Divider orientation="vertical" variant="middle" flexItem />
              <div className="px-[10px]">
                <h1 className={`${archivoBlack.className} text-[40px]`}>2000+</h1>
                <p className="text-[17px] text-[#858585] ">High-Quality Products</p>
              </div>
              <Divider orientation="vertical" variant="middle" flexItem />
              <div className="px-[10px]">
                <h1 className={`${archivoBlack.className} text-[40px]`}>30,000+</h1>
                <p className="text-[17px] text-[#858585] ">Happy Customers</p>
              </div>
            </div>
          </div>
          <img src="/images/bg.png" alt="bg" className="w-[700px] h-[610px]" />
        </div>
      </div>

      <div className="bg-black flex justify-between px-[100px] py-[20px] items-center">
        <img src="/images/pngfind.com-versace-logo-png-614666.png" alt="versace" className="h-[30px] " />
        <img src="/images/ZARA.png" alt="ZARA" className="h-[30px]"/>
        <img src="/images/gucci.png" alt="Gucci" className="h-[30px]"/>
        <img src="/images/PRADA.png" alt="prada" className="h-[30px]"/>
        <img src="/images/CK.png" alt="Calvin Klein" className="h-[40px]" />
      </div>
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="https://nextjs.org/icons/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
