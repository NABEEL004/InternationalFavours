import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'


export default function SignInOut({ isLoggedIn = false }) {

  const auth = useAuth();
  const handleClick =  async () => {
    await auth.signOut()
  }

  if (isLoggedIn){
    return (
      <button onClick={handleClick} className='bg-dark-green hover:bg-lime-600 rounded-lg py-3 px-4 text-white cursor-pointer transition-colors'>
          Sign Out
      </button>
    )
    }
else {
  return (
    <Link to="/signin" className='bg-dark-green hover:bg-lime-600 rounded-lg py-3 px-4 text-white cursor-pointer transition-colors'>
        Sign In
    </Link>
  )
}

}
