import React from 'react'
import Navbar from '../components/Navbar'
import Location from '../assets/location.png'
import ChatItem from '../components/ChatItem'
import Message from '../components/Message'

const Chat = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <Navbar isIcon={true} current="Chat" />
        <div className='bg-dark-green h-[32rem] w-[24rem] rounded-3xl translate-x-12 flex flex-col items-center py-8'>
            <div className='w-full flex flex-col px-2 overflow-y-scroll'>
                <h2 className='font-semibold text-2xl font-body text-center -translate-x-12'>Chats</h2>
                <div className='overflow-y-scroll'>
                    <ChatItem/>
                    <ChatItem/>
                    <ChatItem/>
                    <ChatItem/>
                    <ChatItem/>
                    <ChatItem/>
                    <ChatItem/>
                    <ChatItem/>
                    <ChatItem/>
                </div>
            </div>
        </div>
        <div className='bg-white h-[32rem] w-[24rem] rounded-3xl z-20 -translate-x-12 flex flex-col justify-between items-center py-8'>
            <div className='w-full px-8'>
                <div className='flex items-center gap-1 text-md text-black'>
                    <img 
                        src={Location} 
                        alt="Location" 
                        className='h-3 w-3'
                    />
                    location
                </div>
                <div className='font-semibold text-2xl'>
                    task name
                </div>
            </div>
            <div className='overflow-y-scroll'>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
            <form className='w-full px-8 flex justify-between'>
                <input type="text" placeholder="Type message here..."></input>
                <button type="submit" className='bg-dark-green py-2 px-4 rounded-lg cursor'>Send</button>
            </form>
        </div>

    </div>
  )
}

export default Chat