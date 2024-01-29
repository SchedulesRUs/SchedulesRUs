import React from 'react'

const Pagination = () => {
  return (
    <div className="flex justify-between p-2 text-[14px]">
      <button className='bg-indigo-950 text-white p-1 rounded-md'>Previous</button>
      <button className='bg-indigo-950 text-white p-1 rounded-md'>Next</button>
    </div>
  )
}

export default Pagination;
