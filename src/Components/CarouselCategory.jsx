import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate, createSearchParams } from "react-router-dom"
import "swiper/css"
import "swiper/css/navigation"
import category_0 from '/images/category_0.jpg'
import category_1 from '/images/category_1.jpg'
import category_2 from '/images/category_2.jpg'
import category_3 from '/images/category_3.jpg'
import category_4 from '/images/category_4.jpg'


const CarouselCategory = () => {

  const navigate = useNavigate();
  const searchCategory = (category) => {
        navigate({
          pathname:"search",
          search: `${
            createSearchParams({
              category: `${category}`,
              searchTerm: ``
            })
          }`
        })
  };
  return (
    <div className='bg-white m-3'>
        <div className='text-2xl font-semibold p-3'>Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide onClick={() => searchCategory("Deals")} className='cursor-pointer'>
            <img src={category_0} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Amazon")} className='cursor-pointer'>
            <img src={category_1} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Fashion")} className='cursor-pointer'>
            <img src={category_2} alt="" />
        </SwiperSlide>
        
        <SwiperSlide onClick={() => searchCategory("Computers")} className='cursor-pointer'>
            <img src={category_3} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={() => searchCategory("Home")} className='cursor-pointer'>
            <img src={category_4} alt="" />
        </SwiperSlide>



      </Swiper>
    </div>
  )
}

export default CarouselCategory
