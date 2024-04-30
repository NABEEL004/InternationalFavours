import React from 'react'

const Message = ({ username, body, time }) => {
  return (
    <div className='flex flex-col items-start font-body m-5 gap-1'>
        <div className='flex gap-2 items-center'>
            <div className='bg-blue-500 rounded-full h-6 w-6'>
            </div>
            <div className='font-semibold text-xs'>  
                {username}
            </div>
        </div>
        <div className='text-sm'>
          {body}
        </div>
        <div className='text-xs text-gray-600 font-regular'>
            {time}
        </div>
    </div>
  )
}

export default Message