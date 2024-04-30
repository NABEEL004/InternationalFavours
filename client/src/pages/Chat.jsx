import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Location from '../assets/location.png'
import ChatItem from '../components/ChatItem'
import Message from '../components/Message'

const chatitems = [
    {   
        messageID: 0,
        taskname: "Eiffel Tower Picture",
        requestor: "FranceLover123"
    },
    {
        messageID: 1,
        taskname: "Jalapeno Chips from Canada",
        requestor: "GoldenGully"
    },
    {
        messageID: 2,
        taskname: "Yakun Kaya from SG",
        requestor: "IslandBoiz"
    },
]

const messageitems = [
    {
        messageID: 0,
        username: "Nabeel",
        body: "Hi there, saw your posting!",
        time: "15/02/24 - 7.45am SGT"
    },
    {
        messageID: 0,
        username: "Nabeel",
        body: "I have a friend who is in Paris right now and can help you out!",
        time: "15/02/24 - 7.46am SGT"
    },
    {
        messageID: 0,
        username: "FranceLover123",
        body: "Hi there! Oh that's great!",
        time: "15/02/24 - 10.20am SGT"
    },
]

const Chat = () => {

    const [messageID, setMessageID] = useState(0)
  return (
    <div className='flex justify-center items-center w-full h-full font-body'>
        <Navbar isIcon={true} current="Chat" />
        <div className='bg-dark-green h-[32rem] w-[24rem] rounded-3xl translate-x-12 flex flex-col items-center py-8'>
            <div className='w-full flex flex-col px-2 overflow-y-scroll'>
                <h2 className='font-semibold text-2xl font-body text-center -translate-x-12'>Chats</h2>
                <div className='overflow-y-scroll'>
                    {chatitems.map((prop) => {
                        return(
                            <ChatItem 
                                messageID={prop.messageID}
                                taskname={prop.taskname} 
                                requestor={prop.requestor}
                                onclick={setMessageID}
                            />
                        )
                    })}
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
                    task name {messageID}
                </div>
            </div>
            <div className='overflow-y-scroll'>
                {messageitems.map((prop) => {
                    return (
                        <Message 
                            username={prop.username} 
                            body={prop.body} 
                            time={prop.time}
                        />
                    )
                })}
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