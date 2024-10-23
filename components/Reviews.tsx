import React from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Reviews = () => {
    const reviews = [
        {
          id: 1,
          name: "Samantha D.",
          rating: 5,
          review: "I absolutely love this T-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
          date: "August 14, 2023"
        },
        {
          id: 2,
          name: "Michael B.",
          rating: 4,
          review: "Good quality shirt, fits well, but the design could be more vibrant. Overall, happy with the purchase!",
          date: "July 22, 2023"
        },
        {
          id: 3,
          name: "Emily R.",
          rating: 5,
          review: "This is my new favorite shirt! The fabric is soft and breathable, perfect for summer. I also love the minimalist design.",
          date: "June 30, 2023"
        },
        {
          id: 4,
          name: "John K.",
          rating: 3,
          review: "The T-shirt is comfortable, but it shrunk a bit after the first wash. Still wearable though.",
          date: "May 15, 2023"
        },
        {
          id: 5,
          name: "Anna S.",
          rating: 5,
          review: "I bought this shirt as a gift for my brother and he absolutely loved it! He says it's one of the most comfortable shirts he's ever worn.",
          date: "September 5, 2023"
        },
        {
          id: 6,
          name: "David W.",
          rating: 4,
          review: "Nice design, comfortable fit, but I wish the fabric was a little thicker. Still a great shirt for the price.",
          date: "October 2, 2023"
        }
    ];
  return (
    <div>
        <h2 className='font-semibold text-[16px] py-3'>All Reviews<span className='text-gray-400 text-[12px]'> ({reviews.length})</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            {reviews.map((review) => (
                <div key={review.id} className='p-4 border-2 border-[#ccc] rounded-lg'>
                    <div className='flex justify-between items-center'>
                        <div className="flex items-center">
                            {"⭐".repeat(review.rating)}
                        </div>
                        <div><MoreHorizOutlinedIcon/></div>
                    </div> 
                    <div>
                        <h3 className='text-[15px] text-black font-semibold py-1'>{review.name}</h3>
                        <p className='text-gray-400 py-2'>"<span>{review.review}</span>"</p>
                        <h4 className='text-gray-500 pt-2'>posted on <span>{review.date}</span></h4>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reviews