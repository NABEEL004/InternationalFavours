import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'


import Navbar from '../components/Navbar'
import MiniLogo from '../components/MiniLogo'

export default function SignIn() {
    const { user } = useAuth();
    const navigate = useNavigate()


    useEffect(() => {
        const { from } = { from : { pathname: "/"} }

        if (user != null) {
        console.log("user is ", user)
        navigate(from);
        }
    }, [user])
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = useAuth();
    
    const location = useLocation();
    const { from } = location.state || { from : { pathname: "/"} }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await auth.signIn(email, password);
            navigate(from);
        } catch (error) {
            alert('Authentication failed');
            console.log(error)
        }
    }
    if (user == null ) {
        return (
          <div className='flex justify-center items-center h-screen font-body'>
              <Navbar isIcon={false}/>
              <div className='bg-white rounded-2xl py-8 px-6 flex flex-col h-[28rem] w-[32rem] items-center justify-center gap-4'>
                  <MiniLogo/>
                  <form onSubmit={handleSubmit} className='flex flex-col gap-6 items-center justify-center my-6'>
                      <div>
                          <label htmlFor="">Username: </label>
                          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                      </div>
                      <div>
                          <label htmlFor="">Password: </label>
                          <input type="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)} required/>
                      </div>
                      <input type="submit" className='cursor-pointer text-white bg-dark-green hover:bg-lime-600 transition rounded-xl w-32 h-10 font-medium'/>
                  </form>
                  <Link to="/reset-password" className='text-xs underline text-center'>Forgot Your Password?</Link>
                  <Link to="/create-account" className='text-xs underline text-center'>Create New Account</Link>
              </div>
          </div>
        )
    }
}
