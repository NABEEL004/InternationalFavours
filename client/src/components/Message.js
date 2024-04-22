import React from 'react'

const Message = () => {
  return (
    <div className='flex flex-col items-start font-body m-5 gap-1'>
        <div className='flex gap-2 items-center'>
            <div className='bg-blue-500 rounded-full h-6 w-6'>
            </div>
            <div className='font-semibold text-xs'>  
                username
            </div>
        </div>
        <div className='text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus imperdiet viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        </div>
        <div className='text-xs text-gray-600 font-regular'>
            15/02/24 - 7.45am SGT
        </div>
    </div>
  )
}

export default Message