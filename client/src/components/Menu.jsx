import React from 'react'
import MenuItem from './MenuItem'
import SignInOut from './SignInOut'
import { useState, useEffect } from 'react'
import ProfileIcon from './ProfileIcon'
import ChatIcon from './ChatIcon'
import { useAuth } from '../auth/AuthContext'


export default function Menu({currentPage}) {
    const { user } = useAuth();
    // const [isLoggedIn, setLogIn] = useState(false)
    const [current, setCurrent] = useState("")

    useEffect(() => {
        setCurrent(currentPage);
    },[])

    return (
        <div className='flex gap-6 h-20 justify-center items-center pr-6'>
            <MenuItem name="Home" current={current} link="" />
            <MenuItem name="Browse" current={current} link="browse"/>
            <MenuItem name="FAQs" current={current} link="faq"/>
            <MenuItem name="Request" current={current} link="request" />
            <SignInOut isLoggedIn = {user != null}/>
            <ProfileIcon isLoggedIn = {user != null}/>
            <ChatIcon isLoggedIn = {user != null} haveMessages={true}/>
        </div>
    )
}
