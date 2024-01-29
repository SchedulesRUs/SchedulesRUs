import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({placeholder}) => {
  return (
    <div className="flex gap-2 rounded-md bg-[#f1efefe9] items-center">
      <MdSearch size={24}/>
      <input text="text" placeholder={placeholder} className="rounded-md p-1 " />
    </div>
  )
}

export default Search
