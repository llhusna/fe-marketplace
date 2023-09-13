import React, {useState, useEffect} from 'react'
import { images } from '../../constant'
import {useNavigate} from 'react-router-dom'
import { useWallet } from '../../hooks/useWallet';
import artwork from "../../data/landing/artwork";
/* import { Carousel } from '3d-react-carousal'; */
import test from '../../data/test.json'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, VStack, HStack, Text } from "@chakra-ui/react";


function HeaderHero() {
  const navigate = useNavigate();

const toMarketplace = () => {
  navigate('/newmarketplace')
}

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
     <Box className='w-full md:w-[55%] m-auto'>
        <Box
          sx={{
            ".slick-dots": {
              transform: "translateY(1em)"
            },
            ".slick-dots li button": {
              _before: {
                transition: "0.2s",
                content: "''",
                borderRadius: "100%",
                background: "cyan.500"
              }
            },
            ".slick-arrow": {
              backgroundColor: "cyan.500",
              color: "white",
              w: "30px",
              h: "50px",
              transition: "0.2s",
              _hover: {
                backgroundColor: "cyan.500",
                color: "white"
              },
              _focus: {
                backgroundColor: "cyan.500",
                color: "white"
              },
              _before: {
                transition: "0.2s"
              }
            },
            ".slick-prev": {
              left: "-40px",
              _before: {
                content: '"◀"'
              }
            },
            ".slick-next": {
              right: "-40px",
              _before: {
                content: '"▶"'
              }
            }
          }}
        >
          
        <Slider {...settings}>
          {test.result.map((data, index) => (
            <div key={index} className='border-[1px] border-rose-600 carousel-background h-[35vh] md:h-[30vh] md:[60vw] lg:h-[65vh] lg:w-[50vw] min-[1920px]:h-[45vh] min-[1920px]:w-[50vw]'>
              <div className='grid grid-cols-4 h-full'>
                <div className='col-span-2 flex-col p-6 w-[90%] bg-black'>
                <div className=''>
                  <div className='grid gap-x-4 font-medium lg:py-4 text-[10px] lg:text-xs w-4/5 '>
                     <div className='grid grid-cols-4 hidden md:block'>
                        <div className='flex gap-x-2'>
                        <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md px-2 py-2'>
                          <div className=''>14</div>
                          <div className='text-[8px] lg:text-xs font-semibold'>DAYS</div>
                        </div>
                          <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md px-2 py-2'>
                            <div className=''>12</div>
                            <div className='text-[8px] lg:text-xs font-semibold'>HRS</div>
                          </div>
                          <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md px-2 py-2'>
                            <div className=''>20</div>
                            <div className='text-[8px] lg:text-xs font-semibold'>MINS</div>
                          </div>
                          <div className='bg-black p-1 border-[1px] border-gray-600 rounded-md px-2 py-2'>
                            <div className=''>05</div>
                            <div className='text-[8px] lg:text-xs font-semibold'>SECS</div>
                          </div>
                        </div>
                      </div>
                  </div>               
                  <div className='flex pt-2 md:pt-2 font-bold text-sm md:text-lg lg:text-3xl items-start'>
                      <span>{data.sale_collectibles.collectible_name}</span>
                      <img src={images.badge} className="p-2" />
                  </div>
                  <div className='text-[9px] md:text-[10px] text-red-600 block truncate w-[50%]] md:w-[90%]'>By {data.sale_collectibles.collectibles_user.username}</div>
                  <div className='pt-4 lg:pt-8 text-[9px] lg:text-xs block flex wrap'>{data.sale_collectibles.collectible_description}</div>
                  <button onClick={() => toMarketplace()}  className='text-[10px] lg:text-xs mt-4 lg:mt-12 py-1 lg:py-2'>Go to creation</button>
                </div>
                </div>
                
                <div className='col-span-2 flex w-full'>
                  <img className='object-cover'  src={data.sale_collectibles.ipfs_media_path} alt="6" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </Box>
     </Box>

   </>
  )
}

export default HeaderHero
