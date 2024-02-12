"use client"

import React, { useState } from 'react'
import { s,s1,s2,s3,s4,s5,s6,s7 } from '@/app/asset';
import Image from 'next/image';

const AddUser = () => {
  const [selectedImage, setSelectedImage] = useState(s6);

  // Function to handle image selection
  const handleImageChange = (e) => {
    setSelectedImage(e.target.value);
  };

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
        
        
        <select className="w-[45%] m-4 mt-10 p-2 rounded-md" name="image" id="image" onChange={handleImageChange}>
          <option value={s6}>Select Image</option>
          <option value={s}>User</option>
          <option value={s1}>User 1</option>
          <option value={s2}>User 2</option>
          <option value={s3}>User 3</option>
          <option value={s4}>User 4</option>
          <option value={s5}>User 5</option>
          <option value={s7}>User 6</option>

        </select>
        
          {selectedImage && <Image src={selectedImage} alt="Selected User" width={140} height={140} className="object-cover rounded-md absolute top-[64%] left-[69%] transform -translate-x-1/2 -translate-y-1/2" />}
        <textarea
          name="address"
          id="address"
          placeholder="Address"
          className="w-[100%] m-4 mt-12 p-8 rounded-md"
        >
        </textarea>
        <button type="submit" className="w-[100%] m-4 p-2 rounded-md bg-indigo-950 text-white hover:bg-blue-900">Submit</button>

      </form>
    </div>
  )
}

export default AddUser
