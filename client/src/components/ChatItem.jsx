import React from 'react'

const ChatItem = ({ messageID, taskname, requestor, onclick }) => {
  return (
    <div onClick={() => onclick(messageID)} className='flex items-center gap-2 w-4/5 my-2 cursor-pointer hover:bg-mid-green py-2 px-2 rounded-lg'>
        <div className='bg-red-500 rounded-full h-3 w-3'>
        </div>
        <div className='bg-blue-400 rounded-full h-12 w-12'>
        </div>
        <div className='flex flex-col'>
            <div className='font-semibold font-body'>
                {taskname}
            </div>
            <div className='font-regular font-body text-sm'>
                {requestor}
            </div>
        </div>
    </div>
  )
}

export default ChatItem