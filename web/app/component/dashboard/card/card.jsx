import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className='flex bg-[#F1EFEFE9] p-4 gap-3 rounded-md hover:bg-[#0D1282] hover:text-white cursor-pointer w-[100%]'>
        <MdSupervisedUserCircle size={24} />
        <div className="flex flex-col gap-4">
            <span>Total Employees</span>
            <span className="font-bold">15</span>
            <span>Details</span>
        </div>
    </div>
  )
}

export default Card
