import React from 'react'
import Navbar from '../components/Navbar'

export default function 
() {
  return (
    <div>
        <Navbar isIcon={true} current="Browse"/>
        <div className='flex flex-col justify-center items-center pt-[9rem]'>
          <h2 className='font-body font-medium text-5xl '>Browse Favours</h2>
          <div>Search form</div>
        </div>
        <div>Cards</div>
    </div>
  )
}
