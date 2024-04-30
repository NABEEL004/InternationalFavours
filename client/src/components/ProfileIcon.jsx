import React from 'react'
import User from "../assets/user.png"
import { Link } from 'react-router-dom'

export default function ProfileIcon({ isLoggedIn }) {
    if (isLoggedIn){
        return (
            <Link to="/profile">
                <img src={User} alt="Profile" className='h-6 w-6 cursor-pointer'/>
            </Link>
          )
    }
    else {
        return null
    }
  
}
