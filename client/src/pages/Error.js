import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='font-body'>
        <Navbar isIcon={true}/>
        <div className='font-body text-3xl flex flex-col gap-5 justify-center items-center h-screen'>
            Oops! Looks like you went to a wrong page.
            <Link to="/" className='text-xl text-blue-800 underline'>Back to Home</Link>
        </div>
    </div>
  )
}
