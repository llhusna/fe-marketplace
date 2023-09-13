import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import artwork from "../../data/landing/artwork";
import { IoMdColorPalette } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";

function LaunchpadDrops() {

  const [selectedNFT, setSelectedNFT] = useState(null);
  const navigate = useNavigate();

  const handleNFTClick = (data) => {
    setSelectedNFT(data);
    navigate(`/creation/${data.featured_collectible_info.collectible_uuid}`, {
      state: { data },
    });
  };

  const [currentComponent, setCurrentComponent] = useState('A');

  useEffect(() => {
}, [currentComponent]);

  return (
    <>
    <div className=''>
    <div className='grid grid-cols-5 flex items-center'>
              <span className='flex col-span-5 md:col-span-1 font-bold text-xl lg:text-3xl'>Launchpad Drops</span>
              <div className='flex col-span-3 md:col-span-3 pt-2 md:pt-0 '>
                <div className='flex font-light bg-transparent border-[1px] border-[#6B6B6B] rounded-lg text-[10px] lg:text-xs'>
                    <div  
                        className={`rounded-lg h-8 lg:h-10 cursor-pointer px-6 flex items-center  ${
                        currentComponent === 'A' ? "bg-red-600" : "bg-transparent"
                        }`}
                        onClick={() => setCurrentComponent('A')}
                      >
                        Live
                    </div>
                    <div  
                        className={`rounded-lg h-8 lg:h-10 px-6 cursor-pointer flex items-center  ${
                        currentComponent === 'B' ? "bg-red-600" : "bg-transparent"
                        }`}
                        onClick={() => setCurrentComponent('B')}
                      >
                        Upcoming
                    </div>
                    <div  
                        className={`rounded-lg h-8 lg:h-10 px-6 cursor-pointer flex items-center  ${
                        currentComponent === 'C' ? "bg-red-600" : "bg-transparent"
                        }`}
                        onClick={() => setCurrentComponent('C')}
                      >
                        Ended
                    </div>
                </div>
              </div>
              <span className='col-span-2 flex md:col-span-1 justify-end pt-2 md:pt-0 '><Link className='text-[10px] lg:text-sm border-[1px] border-[#6B6B6B] px-4 py-2 rounded-lg' to="/NewMarketplace">View all</Link></span>     
        </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 mt-4 lg:mt-10 mb-24">

      {artwork.rows.map((data, index) => (
         <div key={index} 
            className="flex flex-col md:col-span-1 relative bg-center bg-cover rounded-lg relative h-40 md:h-52 lg:h-80 hover:border-[1px] hover:border-rose-600 card-background" 
            style={{ backgroundImage: `url(${data.featured_collectible_info.alternative_media_path})` }}
            onClick={() => handleNFTClick(data)} 
          >    
          
            <div className=''>
                <div className='flex py-2 mx-2 lg:py-4 lg:mx-4 absolute top-0 gap-x-2'>
                  <div>
                    <img src={data.featured_collectible_info.collectibles_user.profile_photo_path} className="creator-size"/>
                  </div>

                  <div>
                    <div className='text-xs lg:text-lg font-semibold block w-[100px] lg:w-[160px] truncate'>{data.featured_collectible_info.collectible_name}</div>
                    <div className='text-[9px] lg:text-sm block w-[100px] lg:w-[160px] truncate'>{data.featured_collectible_info.collectibles_user.username}</div>
                  </div>
                </div>

                <div className='absolute bottom-0 w-full'>
                  <div className='m-1 lg:m-2 rounded-lg flex grid grid-cols-4 gap-x-2'>
                    <div className='col-span-3 w-[108%]'>
                      <div className='grid grid-cols-2 lg:py-2 divide-x opaque-bg rounded-md' >
                        <div className='flex flex-col place-items-center'>
                          <div className='pt-1 pb-2' >
                          <div className='text-[10px] lg:text-[11px] text-opensans font-semibold'>List Price</div>
                          <div className='text-[11px] lg:text-sm'>4.06 ETH</div>
                          <div className='text-[10px] lg:text-[11px] text-opensans font-semibold'>5100 usd</div>
                          </div>
                        </div>
                        <div className='flex flex-col place-items-center'>
                          <div className='pt-1 pb-2'>
                          <div className='text-[10px] lg:text-[11px] text-opensans font-semibold'>Last Sale</div>
                          <div className='text-[11px] lg:text-sm'>1000</div>
                          <div className='text-[10px] lg:text-[11px] text-opensans font-semibold'>5100 usd</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='opaque-bg flex flex-col place-items-center h-10 rounded-md w-[80%] translate-x-3'>
                    <IoMdColorPalette
                        className="text-gray-100 text-2xl mt-2"
                      />
                    </div>

                  
                    
                  </div>
                </div>
            </div>
         </div>
       ))}
     </div>
    </div>
    </>
  )
}

export default LaunchpadDrops