import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import FavourCard from '../components/FavourCard'
import { useAuth } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom'

const requests = [
  {
    key: 1,
    title: "Take a picture of the Eiffer Tower",
    location: "Paris, France",
    user: "francelover97",
    desc : "Hi there! I need a picture of the Eiffel tower from a very specific angle. Do reach out if you are able to help :)",
  },
  {
    key: 2,
    title: "Should I eat cheese in the Netherlands",
    location: "Netherlands",
    user: "cheeeeeese88",
    desc : "Hi, am a big fan of cheese and was wondering if the cheese in the Netherlands is any good?",
  },
  {
    key: 3,
    title: "Help me buy Miss Vickies Jalapeno Chips",
    location: "Canada",
    user: "GoldenGully",
    desc : "Hello, if anyone is flying in from canada to singapore any time soon, could you help to buy my the miss vickies chips"
  },
  {
    key: 4,
    title: "Help me buy tea leaves or spices",
    location: "India",
    user: "Tehtarek<3",
    desc : "Hi, i'm really missing tea from india. if anyone is flying in to singapore from there please help me get some!!"
  },
]

export default function Browse() {
  const { user } = useAuth();
  const { from } = { from : { pathname: "/signin"} }
  const navigate = useNavigate()

  useEffect(() => {
    if (user == null) {
      console.log("user is ", user)
      navigate(from);
    }
  }, [user])

  if (user != null) {
  return (
    <div className='flex flex-col justify-center items-center font-body'>
        <Navbar isIcon={true} current="Browse"/>
        <div className='flex flex-col justify-center items-center pt-[9rem]'>
          <h2 className='font-body font-medium text-5xl '>Browse Favours</h2>
          <Search/>
        </div>
        <div className='flex flex-wrap gap-8 w-[80%] justify-center items-center mt-12'>
            {requests.map(details => {
              return(
                <FavourCard
                  key = {details.key}
                  title = {details.title}
                  user = {details.user}
                  location = {details.location}
                  desc = {details.desc}
              />)
            })}
        </div>
    </div>
  )}
}
