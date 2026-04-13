import React from 'react'

const SearchBar = ({onChange}) => {
    return (
        <input onChange={(event)=>onChange(event.target.value)} className='transition duration-300 hover:shadow-lg font-extrabold  text-white h-[80%] w-2xl  px-5 py-2 rounded-full border border-gray-200 shadow-sm mt-2 p-2 focus:outline-none' type="search" placeholder='Search for you favourite items...' />
    )
}

export default SearchBar