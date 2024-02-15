import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuItem({ name, current, link }) {
  return (
    <div className={`cursor-pointer font-body border-b-2  hover:border-stone-600 ${current === name ? 'border-stone-900' : 'border-transparent'} transition-colors`}>
        <Link to={`/${link}`}>
          {name}  
        </Link>
    </div>
  )
}
