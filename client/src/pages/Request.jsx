import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

import { useAuth } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom'

const Request = () => {

    const { user } = useAuth();
    const { from } = { from : { pathname: "/signin"} }
    const navigate = useNavigate()

    useEffect(() => {
        if (user == null) {
          console.log("user is ", user)
          navigate(from);
        }
      }, [user])

    
    if ( user != null) {
        return (
            <div className='font-body'>
                <Navbar isIcon={true} />
                <div>Request</div>
            </div>
        )
    }
}

export default Request