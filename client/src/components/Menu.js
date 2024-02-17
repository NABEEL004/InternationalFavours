import React from 'react'
import MenuItem from './MenuItem'
import SignInOut from './SignInOut'
import { useState, useEffect } from 'react'
import ProfileIcon from './ProfileIcon'
import ChatIcon from './ChatIcon'


export default function Menu({currentPage}) {
    const [isLoggedIn, setLogIn] = useState(false)
    const [current, setCurrent] = useState("Browse")

    useEffect(() => {
        setCurrent(currentPage);
    },[])

    return (
        <div className='flex gap-6 h-20 justify-center items-center pr-6'>
            <MenuItem name="Home" current={current} link="" />
            <MenuItem name="Browse" current={current} link="browse"/>
            <MenuItem name="FAQs" current={current} link="faq"/>
            <SignInOut isLoggedIn = {isLoggedIn}/>
            <ProfileIcon isLoggedIn = {isLoggedIn}/>
            <ChatIcon isLoggedIn = {isLoggedIn} haveMessages={true}/>

        </div>
    )
}
