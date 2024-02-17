import React from 'react'
import { Link } from 'react-router-dom'

export default function SignInOut({ isLoggedIn = false }) {
  return (
    <Link to={isLoggedIn ? "/signout" : "/signin"} className='bg-dark-green hover:bg-lime-600 rounded-lg py-3 px-4 text-white cursor-pointer transition-colors'>
        { isLoggedIn ? "Sign Out" : "Sign In"}
    </Link>
  )
}
