"use client"

import React, { useState } from 'react'


const AddUser = () => {

  


  return (
    <div className="p-5 rounded-lg mt-5 bg-[#f1efefe9]">
      <form action="" className="flex flex-wrap justify-between">
          <input className="w-[45%] m-4 p-2 rounded-md" type="text" placeholder="Username" name="username" required />
          <input className="w-[45%] m-4 p-2 rounded-md" type="email" placeholder="Email" name="email" required />
          <input className="w-[45%] m-4 p-2 rounded-md" type="password" placeholder="Password" name="password" required />
          <input className="w-[45%] m-4 p-2 rounded-md" type="phone" placeholder="Phone" name="phone" />
          <input className="w-[45%] m-4 p-2 rounded-md" type="phone" placeholder="Role" name="role" />
        <select className="w-[45%] m-4 p-2 rounded-md" name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="address"
          placeholder="Address"
          className="w-[100%] m-4 p-8 rounded-md"
        >
        </textarea>
        <button type="submit" className="w-[100%] m-4 p-2 rounded-md bg-indigo-950 text-white hover:bg-blue-900">Submit</button>



      </form>
    </div>
  )
}

export default AddUser
