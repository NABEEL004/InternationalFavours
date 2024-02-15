import React from 'react'
import Menu from './Menu'
import MiniLogo from './MiniLogo'

export default function Navbar({ isIcon = false, current }) {
  return (
    <div className='flex fixed top-0 w-full justify-between'>
        <div>
          {
            isIcon ? 
            <MiniLogo/>:
            ""
          }
        </div>
        <Menu currentPage = {current}/>
    </div>
  )
}
