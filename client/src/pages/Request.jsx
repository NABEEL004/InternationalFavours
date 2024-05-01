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
            <div className='font-body flex items-center justify-center h-full w-full'>
                <Navbar isIcon={true} current="Request" />
                <form className='flex flex-col gap-6 items-center bg-[rgba(0,0,0,0.03)] py-12 px-8 rounded-lg shadow-lg'>
                    <h2 className='font-semibold text-4xl text-center'>Request a Favour</h2>
                    <div className='flex flex-col gap-3'>
                        <label for="title" className='font-medium text-xl' required>
                            What's the favour?
                        </label>
                        <input type="text" id="title" name="title" className='h-12 p-3 rounded-md' required/>
                        <label for="country" className='font-medium text-xl ' >
                            What country is the favour based in?
                        </label>
                        <input type="country" id="title" name="title" className='h-12 p-3 rounded-md' required/>
                        <label for="desc" className='font-medium text-xl' >
                            Description of the favour:
                        </label>
                        <textarea name="desc" id="desc" cols="30" rows="10" className='rounded-md p-3 max-h-[12rem] min-h-[3rem]' required></textarea>
                    </div>
                    <button className='bg-pale-green py-2 px-4 font-semibold text-xl w-40 rounded-lg'>Request!</button>
                </form>
            </div>
        )
    }
}

export default Request