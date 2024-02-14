import React from 'react'

export default function MenuItem({ name, current }) {
  return (
    <div className={`cursor-pointer font-body border-b-2  hover:border-stone-600 ${current === name ? 'border-stone-900' : 'border-transparent'} transition-colors`}>
        {name}
    </div>
  )
}
