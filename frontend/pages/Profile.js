import React, {useState, useEffect} from 'react'

import { Dashboard } from '../components/ProfileContent/Dashboard'
import { Creation } from '../components/ProfileContent/Creation'
import { Collection } from '../components/ProfileContent/Collection'
import { OnSale } from '../components/ProfileContent/OnSale'
import { Favourite } from '../components/ProfileContent/Favourite'
import { Profile } from '../components/ProfileContent/Profile'
import { MyAuction } from '../components/ProfileContent/MyAuction'
import { CoverProfile } from '../components/ProfileContent/CoverProfile'
import { images } from '../constant'



export const Profile = () => {

    const profile = {
        user_public_address: "0x0727c18d9dA74F36eaF8bAB25614F465D4498a7f"
    }

    const padFunction = (number) => {
        let string = String(number)
        let sliced = string.slice(-4);	
        let mask = String(sliced).padStart(string.length, ".")
        return mask;
      }

    const [currentComponent, setCurrentComponent] = useState('A');

    useEffect(() => {
      }, [currentComponent]);

  return (
    <>
    <div className='lg:mx-16 mt-4'>
    <div><CoverProfile/></div>

    <div className='grid grid-cols-1 lg:grid-cols-4 relative gap-6 pl-0 lg:pl-16 pr-10 mt-16'>

    {/* left container */}
        <div className='flex flex-col col-span-4 lg:col-span-1 bg-white rounded-2xl text-black py-10 px-6 ml-10 lg:ml-0 -translate-y-44'>
            <div className='profile-size'></div>
            <div className='text-2xl font-semibold text-center'>{/* @{profile.user_public_address.slice(-4).padStart(profile.user_public_address.length, ".")} */}
                @0x07...8a7f
            </div>
            <div className='text-center text-sm py-4'>@0x07...8a7f</div>

            <a href='/updateprofile' 
                className='my-16 text-center hover:border-orange-600 hover:border-2 hover:p-2 hover:rounded-lg'>
                Edit Profile
            </a>

            <div className='flex justify-between pb-6'>
                <div className='flex text-sm font-medium flex-col gap-y-3'>
                    <span>Project Views</span>
                    <span>Favourites</span>
                    <span>Followers</span>
                    <span>Following</span>
                    <span className='font-semibold'>Contact Me</span>
                </div>

                <div className='flex flex-col text-sm font-medium text-gray-400 gap-y-3 text-right'>
                    <span>N/A</span>
                    <span>0</span>
                    <span>0</span>
                    <span>0</span>
                </div>

            </div>

            <div className='py-10 text-sm font-semibold'>
                <span>About</span>
                <span></span>
            </div>

            <div className='flex mt-48 mb-10 gap-x-4 justify-center'>
                <span><img src={images.share}/></span>
                <span><img src={images.share}/></span>
            </div>

            <div className='my-8 text-xs text-center'>Member Since: November 4, 2022</div>

        </div>



    {/*  right container */}
    {/* button */}
        <div className="flex flex-col col-span-4 lg:col-span-3 -translate-y-24 md:translate-y-0">
            <div className='flex justify-between gap-3 bg-none rounded-full h-10 px-8 text-sm font-semibold overflow-x-auto'>
                <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent('A')}>DASHBOARD</button>
                <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent('B')}>CREATION</button>
                <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent('C')}>COLLECTION</button>
                <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent('D')}>ON SALE</button>
                <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent('E')}>MY AUCTIONS</button>
                <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent('F')}>FAVOURITE</button>
                <button className='button-profile rounded-full h-10 px-4' onClick={() => setCurrentComponent('G')}>PROFILE</button>
            </div>

            <div className='py-6'>

        {/* Content */}
                <div>
                    {currentComponent === 'A' ? <Dashboard/> : null}
                    {currentComponent === 'B' ? <Creation /> : null}
                    {currentComponent === 'C' ? <Collection /> : null}
                    {currentComponent === 'D' ? <OnSale /> : null}
                    {currentComponent === 'E' ? <MyAuction /> : null}
                    {currentComponent === 'F' ? <Favourite /> : null}
                    {currentComponent === 'G' ? <Profile /> : null}
                </div>
            
            </div>
        </div>
    </div>
    </div>
    </>
  )
}