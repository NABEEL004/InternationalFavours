import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import MiniLogo from '../components/MiniLogo'

export default function SignIn() {
  return (
    <div className='flex justify-center items-center h-screen font-body'>
        <Navbar isIcon={false}/>
        <div className='bg-white rounded-2xl py-8 px-6 flex flex-col h-[28rem] w-[32rem] items-center justify-center gap-4'>
            <MiniLogo/>
            <form action="" className='flex flex-col gap-6 items-center justify-center my-6'>
                <div>
                    <label htmlFor="">Username: </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Password: </label>
                    <input type="password" />
                </div>
                <input type="submit" className='cursor-pointer text-white bg-dark-green hover:bg-lime-600 transition rounded-xl w-32 h-10 font-medium'/>
            </form>
            <Link to="/reset-password" className='text-xs underline text-center'>Forgot Your Password?</Link>
            <Link to="/create-account" className='text-xs underline text-center'>Create New Account</Link>
        </div>
    </div>
  )
}
