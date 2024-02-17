import React from 'react'
import Chat from '../assets/chat.png'
import { Link } from 'react-router-dom'

export default function ChatIcon({isLoggedIn, haveMessages = false}) {
    if (isLoggedIn) {
        return (
          <Link to="/messages" className='flex items-center justify-center'>
            <img src={Chat} alt="messages" className='h-6 w-6 cursor-pointer' />
            <div className={`bg-red-500 h-3 w-3 rounded-full absolute translate-x-3 translate-y-[-0.75rem] ${haveMessages ? "absolute" : "hidden"}`}></div>
          </Link>
        )
    }
    else {
        return null
    }
}
