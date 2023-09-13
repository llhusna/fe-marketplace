import React, {useState, useEffect} from 'react'
import market from '../../data/market.json'
import { MdArrowDropDown } from "react-icons/md";

export const Trending = () => {
  const [currentComponent, setCurrentComponent] = useState(1);
  useEffect(() => {}, [currentComponent]);

  return (
    <div className='text-white my-20'>
     <div className='grid grid-cols-2'>
         <div className='flex col-span-1 text-2xl font-semibold'>
                <div  
                    className={`rounded-full pr-4 cursor-pointer  ${
                    currentComponent === 1 ? "text-white" : "text-gray-500"
                    }`}
                    onClick={() => setCurrentComponent(1)}
                  >
                    Trending
                </div>
                <div 
                 className={`rounded-full px-4 cursor-pointer  ${
                    currentComponent === 2 ? "text-white" : "text-gray-500"
                    }`}
                    onClick={() => setCurrentComponent(2)}
                  >
                    Top
                </div>
                <div  
                    className={`rounded-full px-4 cursor-pointer  ${
                    currentComponent === 3 ? "text-white" : "text-gray-500"
                    }`}
                    onClick={() => setCurrentComponent(3)}
                   >
                    Favourite
                </div>
        </div>

        <div className='flex col-span-2 md:col-span-1 gap-x-2 text-xs text-center font-light mt-6 justify-start md:justify-end pb-10 md:pb-0'>
              <div className='flex items-center gap-2 border-[1px] border-[#6B6B6B] rounded-lg p-2'>
                <span>24 hours</span>
                    <MdArrowDropDown
                      className="transform text-gray-100 text-xs"
                    />
                </div>
                <div className='flex items-center gap-2 border-[1px] border-[#6B6B6B] rounded-lg p-2'>
                <span>Chain</span>
                    <MdArrowDropDown
                      className="transform text-gray-100 text-xs"
                    />
                </div>
                <div className='flex items-center gap-2 border-[1px] border-[#6B6B6B] rounded-lg p-2'>
                <span>View All</span>
                    <MdArrowDropDown
                      className="transform text-gray-100 text-xs"
                    />
                </div>
        </div>
    </div>
    
    {currentComponent === 1 && 
    <>
     <div class="overflow-x-auto">
            <table class="min-w-full text-xs">
              <thead class="ltr:text-left rtl:text-right">
              <tr>
                <th scope="col" className="flex justify-start font-light pb-2">Collection</th>
                <th scope="col" className="font-light pb-2">Volume</th>
                <th scope="col" className=" font-light pb-2">Floor Price</th>
              </tr>
              </thead>

              
              {market.data.result.map((data, i) => (
                <tbody key={i} className="divide-y divide-gray-200">
                  <tr className="w-full">
                    <td scope="col" className="pr-10 py-4 whitespace-nowrap">
                      <div className='flex gap-x-2 items-center'>
                        <span><img className="trending-avatar-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/></span>
                        <span className='block truncate'>{data.transaction_of_collectible.collectible_name}</span>
                      </div>
                    </td>

                    <td scope="col" className="md:px-16 lg:px-28 whitespace-nowrap text-center">{data.action_type}</td>

                    <td
                      scope="col"
                      className="px-10 py-4 whitespace-nowrap text-center"
                    >
                      {Number(
                        Math.round(data.unit_price / 1000000000000).toFixed(3)
                      )}
                    </td>

                    <td scope="col" className="flex py-2 justify-end">
                      <div className='flex  gap-x-2 lg:gap-x-6  items-center'>
                        <img className="trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/>
                        <img className="trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/>
                        <img className="trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/>
                        <img className="trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/>
                        <img className="trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/>
                        <img className="trending-size z-10" src={data.transaction_of_collectible.ipfs_media_path}/>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}       
            </table>
          </div>
    </>
    }

    {currentComponent === 2 && <></>}
    {currentComponent === 3 && <></> }

    </div>
  )
}
