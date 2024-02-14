import React from 'react'

export default function SignInOut({ isLoggedIn = false }) {
  return (
    <div className='bg-dark-green hover:bg-lime-600 rounded-lg py-3 px-4 text-white cursor-pointer transition-colors'>
        { isLoggedIn ? "Sign Out" : "Sign In"}
    </div>
  )
}
