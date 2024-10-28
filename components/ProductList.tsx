import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import Top from '../public/images/black t shirt.png'
// import FemaleBag from '../public/images/female-bag.png'
// import Jean from '../public/images/blue mens jeans.png'
// import Bag from '../public/images/bagpng.png'
import Bag2 from '../public/images/bagpng2.png'
// import BG from '../public/images/leather-bag-png.png'
import { useProductContext } from '@/context/productContext';
 
const ProductList = () => {
    const { products } = useProductContext();
    const [page, setPage] = useState(1);

  return (
    <div className='py-[20px]'>
        <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
            {products?.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="w-[45%] sm:w-[30%] lg:w-[22%] px-[10px] py-[5px] flex-shrink-0">
                <div className="h-[200px] w-full relative bg-[#F2F0F1] rounded-[20px]">
                    {/* <Image
                        src={product.images}
                        alt={product.title}
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px] z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                    /> */}
                    {/* <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={500}
                        height={500}
                        className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px]"
                    /> */}

                            <Image
                                src={product.images[0] || '/path-to-placeholder-image.png'} 
                                alt={product.title}
                                width={500} 
                                height={500}
                                className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px] z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
                            />
                            <Image
                                src={product.thumbnail || product.images[0]}
                                alt="product image"
                                width={200} 
                                height={200}
                                className="bg-[#F2F0F1] w-full h-full absolute object-cover rounded-[20px]"
                            />
                </div>
                <div>
                    <p className="text-[16px] font-normal mt-2 line-clamp-1 tracking-tight">{product.title}</p>
                    <div className="flex items-center">
                    {/* Example rating stars */}
                    ⭐⭐⭐⭐⭐
                    </div>
                    <p className="text-[15px] lg:text-[20px] font-semibold">${product.price}</p>
                </div>
            </Link>
            )) || <p>Loading...</p>}
            
        </div>
        <div className="pagination-controls">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
            </button>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
        
    </div>
  )
}

export default ProductList