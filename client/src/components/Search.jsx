import React from 'react'
import { useState } from 'react'

// https://countriesnow.space/api/v0.1/countries


const countries = [{
}]

export default function Search() {
  const [searchFilter, setSearchFilter] = useState("")
  const [countryFilter, setCountryFilter] = useState("")
  const [stateFilter, setStateFilter] = useState("")
  return (
    <div>
      <form className='flex flex-col gap-5 justify-center items-center focus:outline-none'>
        <div>
          <input 
            placeholder="Search" 
            type="text" 
            value={searchFilter} 
            onChange={(e) => setSearchFilter(e.target.value)}
            className='h-16 w-[28rem] rounded-xl px-5 mt-5 font-body text-lg '
            />
        </div>
        <div className='flex gap-5'>
          <input 
            placeholder="Country" 
            type="text" 
            value={countryFilter} 
            onChange={(e) => setCountryFilter(e.target.value)}
            className='h-12 w-72 rounded-lg px-5 font-body'
            />
          <input 
            placeholder="State" 
            type="text" 
            value={stateFilter} 
            onChange={(e) => setStateFilter(e.target.value)}
            className='h-12 w-72 rounded-lg px-5 font-body'
            />
          <select 
            name="cars" 
            id="cars" 
            placeholder="Type"
            className='h-12 w-72 rounded-lg px-5 font-body'
          >
            <option value="volvo">Type</option>
            <option value="saab">Advice</option>
            <option value="mercedes">Pictures</option>
            <option value="audi">Purchase</option>
          </select>
        </div>


      </form>

    </div>
  )
}
