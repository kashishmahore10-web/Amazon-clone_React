import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import carousel_1 from '/images/carousel_1.jpg'
import carousel_2 from '/images/carousel_2.jpg'
import carousel_vid from '/images/carousel_vid.mp4'
import carousel_3 from '/images/carousel_3.jpg'
import carousel_4 from '/images/carousel_4.jpg'





const Carousel = () => {
  return (
    <div className='h-[600px] bg-white '>
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay:2500
        }}
        className="h-[50%]"
    >
        <SwiperSlide>
            <img className='w-[2184px] h-auto'src={carousel_1} alt=""/>
        </SwiperSlide>

        <SwiperSlide>
            <img className='w-[2184px] h-auto' src={carousel_2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='bg-black'>
            <video controls muted='muted'>
               <source src={carousel_vid}/>
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-[2184px] h-auto'src={carousel_3} alt=""/>
        </SwiperSlide>

        <SwiperSlide>
            <img className='w-[2184px] h-auto' src={carousel_4} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className='h-[50%] bg-gradient-to-b from-stone-900'/>
    </div>
  )
}

export default Carousel
