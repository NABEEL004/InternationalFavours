import React from 'react'
import Navbar from '../components/Navbar.js'
import Logo from "../assets/world.png"

export default function Landing() {
  return (
    <div className='flex flex-col items-center justify-center h-full v-full'>
        <Navbar current="Home" />
        <div className='md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center gap-4'>
            <div className='h-48 w-48'>
                <img src={Logo} />
            </div>
            <div className='text-4xl md:text-5xl font-bold text-center font-header'>
                International<br/>Favours
            </div>
            <div className='w-4/5 text-center font-body font-light'>
                Seek help from trusted individuals across the world! Ask for travel advice, help to run an errand, or even purchase something from a specific country to bring to you. The world is your limit.
            </div>
            <div className='bg-white rounded-full py-3 px-6 cursor-pointer font-body hover:scale-110 transition'>
                Ask Away!
            </div>

        </div>

    </div>
  )
}
