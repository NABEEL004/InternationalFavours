import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import FavourCard from '../components/FavourCard'

export default function Browse() {
  return (
    <div className='flex flex-col justify-center items-center font-body'>
        <Navbar isIcon={true} current="Browse"/>
        <div className='flex flex-col justify-center items-center pt-[9rem]'>
          <h2 className='font-body font-medium text-5xl '>Browse Favours</h2>
          <Search/>
        </div>
        <div className='flex flex-wrap gap-8 w-[80%] justify-center items-center mt-12'>
          <FavourCard
            title = "Take a picture of the Eiffer Tower"
            location = "Paris, France"
            user = "francelover97"
            desc = "Hi there! I need a picture of the Eiffel tower from a very specific angle. Do reach out if you are able to help :)"
          />
          <FavourCard
            title = "Should I eat cheese in the Netherlands"
            location = "Netherlands"
            user = "cheeeeeee88"
            desc = "Hi, am a big fan of cheese and was wondering if the cheese in the Netherlands is any good?"
          />
          <FavourCard
            title = "Help me buy Miss Vickies Jalapeno Chips"
            location = "Canada"
            user = "GoldenGully"
            desc = "Hello, if anyone is flying in from canada to singapore any time soon, could you help to buy my the miss vickies chips?"
          />
          <FavourCard
            title = "Take a picture of the Eiffer Tower"
            location = "Paris, France"
            user = "francelover97"
            desc = "Hi there! I need a picture of the Eiffel tower from a very specific angle. Do reach out if you are able to help :)"
          />
          <FavourCard
            title = "Should I eat cheese in the Netherlands"
            location = "Netherlands"
            user = "cheeeeeee88"
            desc = "Hi, am a big fan of cheese and was wondering if the cheese in the Netherlands is any good?"
          />
          <FavourCard
            title = "Help me buy Miss Vickies Jalapeno Chips"
            location = "Canada"
            user = "GoldenGully"
            desc = "Hello, if anyone is flying in from canada to singapore any time soon, could you help to buy my the miss vickies chips?"
          />
          <FavourCard
            title = "Take a picture of the Eiffer Tower"
            location = "Paris, France"
            user = "francelover97"
            desc = "Hi there! I need a picture of the Eiffel tower from a very specific angle. Do reach out if you are able to help :)"
          />
          <FavourCard
            title = "Should I eat cheese in the Netherlands"
            location = "Netherlands"
            user = "cheeeeeee88"
            desc = "Hi, am a big fan of cheese and was wondering if the cheese in the Netherlands is any good?"
          />
          <FavourCard
            title = "Help me buy Miss Vickies Jalapeno Chips"
            location = "Canada"
            user = "GoldenGully"
            desc = "Hello, if anyone is flying in from canada to singapore any time soon, could you help to buy my the miss vickies chips?"
          />
        </div>
    </div>
  )
}
