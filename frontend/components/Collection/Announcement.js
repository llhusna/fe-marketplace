import React from 'react'

export const Announcement = () => {
  return (
    <div className="grid grid-cols-4">
        <div className="col-span-1">
        </div>
        <div className="col-span-3">
           <div className='flex flex-col gap-y-6'>
               <div>
               <div className='border-[1px] border-red-400 h-20 w-[85%] px-5 py-2 rounded-lg'>
                    <div className='font-bold text-sm'>Subject</div>
                    <div className='font-medium text-xs pt-2'>
                        asdad
                    </div>
               </div>
               <div className='text-[10px] pt-1'><span>Posted </span><span className='text-red-600'>15 minutes ago</span></div>
               </div>

               <div>
               <div className='border-[1px] border-red-400 h-20 w-[85%] px-5 py-2 rounded-lg'>
                    <div className='font-bold text-sm'>Subject</div>
                    <div className='font-medium text-xs pt-2'>
                        asdad
                    </div>
               </div>
               <div className='text-[10px] pt-1'><span>Posted </span><span className='text-red-600'>15 minutes ago</span></div>
               </div>
           </div>
        </div> 
    </div>
  )
}
