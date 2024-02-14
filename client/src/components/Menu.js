import React from 'react'
import MenuItem from './MenuItem'
import SignInOut from './SignInOut'
import { useState } from 'react'
import ProfileIcon from './ProfileIcon'
import ChatIcon from './ChatIcon'

export default function Menu() {
    const [isLoggedIn, setLogIn] = useState(false)
    const [current, setCurrent] = useState("Home")

    return (
        <div className='flex gap-6 h-20 justify-center items-center pr-6'>
            <MenuItem name="Home" current={current} />
            <MenuItem name="Browse" current={current}/>
            <MenuItem name="FAQs" current={current}/>
            <SignInOut isLoggedIn = {isLoggedIn}/>
            <ProfileIcon isLoggedIn = {isLoggedIn}/>
            <ChatIcon isLoggedIn = {isLoggedIn}/>

        </div>
    )
}
