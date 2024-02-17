import React from 'react'
import Location from '../assets/location.png'
import User from '../assets/user.png'

export default function FavourCard({ title, location, user, desc}) {
  return (
    <div className='bg-white h-64 w-80 rounded-2xl flex flex-col justify-center items-center font-body
                    hover:scale-105 transition group overflow-clip'>
        <div className='flex flex-col justify-center items-center group-hover:translate-y-[-0.5rem] translate-y-[1.3rem] transition duration-300'>
            <h3 className='text-lg font-medium w-3/4 text-center h-[28%] flex items-end justify-end'>{title}</h3>
            <div className='flex gap-5 text-[0.7rem] font-semibold h-[18%] justify-center items-center'>
                <div className='flex gap-1'>
                    <img 
                        src={Location} 
                        alt="Location" 
                        className='h-3 w-3'
                    />
                    {location}
                </div>
                <div className='flex gap-1'>
                    <img 
                        src={User} 
                        alt="User" 
                        className='h-3 w-3' 
                    />
                    {user}
                </div>
            </div>
            <div className='text-[0.8rem] w-3/4 text-center h-[32.5%] items-start flex justify-center'>
                {desc}
            </div>
        </div>
        <div className='group-hover:h-auto bg-dark-green py-2 px-6 text-sm rounded-xl hover:bg-lime-600 translate-y-[6rem] group-hover:translate-y-[0.8rem] transition cursor-pointer duration-500'>
            I can help!
        </div>
    </div>
  )
}
