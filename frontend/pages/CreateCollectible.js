import React from 'react'
import { images } from '../constant'
import {useNavigate} from "react-router-dom"

export const CreateCollectible = () => {

    const navigate = useNavigate();

    const handleSingleClick = () => {
        navigate('/create/nft')
      }

    const handleMultipleClick = () => {
        navigate('/create/:id/multiple')
      }
    
  return (
    <>
    <div className='mx-16'>
      <div class="grid grid-cols-3 md:grid-cols-3 py-20">
          <div class="md:col-span-2 mr-20">
              <button className=''>Go Back</button>
              <div className='text-5xl font-bold py-8'>Create Collectible</div>

              <div className='text-gray-400'>Choose “Single” if you want your collectible to be one of a kind or 
                  “Multiple” if you want to sell one collectible multiple times
              </div>

              <div className='flex text-orange-600 font-bold text-lg gap-6 py-10'>
                  <div className='flex flex-col bg-white py-16 px-16 rounded-[35px]' onClick={handleSingleClick}>
                      <img src={images.single} className='h-10 w-10 mx-auto'/>
                      Single
                  </div>
                  <div className='flex flex-col bg-white py-16 px-14 rounded-[35px]' onClick={handleMultipleClick}>
                      <img src={images.multiple} className='h-10 w-10 mx-auto'/>
                      Multiple
                  </div>
              </div>

              <div className='flex bg-white rounded-xl p-6 gap-6 font-semibold text-gray-500'>
                  <span><img src={images.checkmark} /></span>
                  <span className=''>We do not own your private keys and cannot access your funds without your confirmation</span>
              </div>
          </div>

          <div class="flex md:col-span-1">
              <div class="relative">
                    <img
                      class="object-fill"
                      alt="Artworks"
                      src={images.create}
                    />
                    <div class="mt-10 mb-20 main-text-size text-grey text-weight-500">
                      "In the space where Love exists." - teal_arts
                    </div>
                  </div>
                </div>
      </div>
    </div>
    </>
  )
}