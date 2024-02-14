import React from 'react'

export default function ProfileIcon({ isLoggedIn }) {
    if (isLoggedIn){
        return (
            <div>ProfileIcon</div>
          )
    }
    else {
        return null
    }
  
}
