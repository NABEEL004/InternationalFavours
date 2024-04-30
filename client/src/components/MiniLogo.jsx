import React, { Component } from 'react'
import Logo from "../assets/world.png"
import { Link } from 'react-router-dom'

export default class MiniLogo extends Component {
  render() {
    return (
      <Link className='flex justify-center items-center gap-3 pl-3 pt-3' to="/">
        <img src = {Logo} className='h-20 w-20'/>
        <h2 className='font-header font-bold text-3xl'>International<br/>Favours</h2>
      </Link>
    )
  }
}
