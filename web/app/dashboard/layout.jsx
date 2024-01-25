import React from 'react'
import Sidebar from '../component/dashboard/sidebar/sidebar'
import Navbar from '../component/dashboard/navbar/navbar'

const Layout = ({children}) => {
  return (
    <div className='flex'>
      <div className='flex bg-[#F1EFEFE9] p-10'>
        <Sidebar/>
      </div>
      <div className='flex-1 p-5'>
        <Navbar/>
        {children}
      </div>
    </div>
  )
}

export default Layout
