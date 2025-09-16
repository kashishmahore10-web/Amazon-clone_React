import React from 'react'
import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./"
// import salesBanner from '../assets/salesBanner.jpg'
import home_grid_1 from '/images/home_grid_1.jpg'
import home_grid_2 from '/images/home_grid_2.jpg'
import home_grid_3 from '/images/home_grid_3.jpg'
import home_grid_4 from '/images/home_grid_4.jpg'
import home_grid_5 from '/images/home_grid_5.jpg'
import home_grid_6 from '/images/home_grid_6.jpg'
import home_grid_7 from '/images/home_grid_7.jpg'
import home_grid_8 from '/images/home_grid_8.jpg'
import bannner_image_2 from '/images/banner_image_2.jpg'





const HomePage = () => {
  return (
    <div className='bg-[#EAEDED]'>
      <div className='min-w-[1000px] max-w-[1500px] m-auto '>
        <Carousel />
        <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
            <HomePageCard title={"we have a surprise for you"} 
            img={home_grid_1} alt="" 
            link={"See terms and conditions"}/>
            <HomePageCard title={"Watch the Rings of Power"} 
            img={home_grid_2} alt="" 
            link={"Start streaming now"}/>
            <HomePageCard title={"Unlimited Streaming"} 
            img={home_grid_3} alt="" 
            link={"Find out more"}/>
            <HomePageCard title={"More titles to explore"} 
            img={home_grid_4} alt="" 
            link={"Browse kindle Unlimited"}/>
            <HomePageCard title={"Shop Pet Supplies"} 
            img={home_grid_5} alt="" 
            link={"See more"}/>
            <HomePageCard title={"Spring Sale"} 
            img={home_grid_6} alt="" 
            link={"See the deals"}/>
            <HomePageCard title={"Echo bods"} 
            img={home_grid_7} alt="" 
            link={"See more"}/>
            <HomePageCard title={"we havw a surprise for you"} 
            img={home_grid_8} alt="" 
            link={"Learn more"}/>
          <div>
            <img className='m-3 pt-8' src={bannner_image_2} alt="Banner" />
            </div>
        </div>
            <CarouselProduct />
            <CarouselCategory />

          <div className='h-[200px] '>
          <img className='h-[100%] m-auto items-center' src={"../images/banner_image.jpg"} alt="" />  
          </div>
        </div>
    </div>
  )
}

export default HomePage
