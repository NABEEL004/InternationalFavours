import React from 'react'

export default function ChatIcon({isLoggedIn}) {
    if (isLoggedIn) {
        return (
          <div>ChatIcon</div>
        )
    }
    else {
        return null
    }
}
