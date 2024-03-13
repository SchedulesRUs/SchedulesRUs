"use client";

import React, { useState, useEffect } from "react";
import { s, s1, s2, s3, s4, s5, s6, s7 } from "@/app/asset";
import Image from "next/image";
import { BASE_URL } from "@/app/constants/Config";



class User {
  constructor(username, password, email, image, address, role, isAdmin, phone) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.image = image;
    this.address = address;
    this.role = role;
    this.isAdmin = isAdmin;
    this.phone = phone;
  }
}


const AddUser = () => {
  const [user, setUser] = useState(new User("This is test", "", "", "", "", "", "", ""));

  // Function to update user state
  const updateUser = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  async function createUser() {
    const requestBody = JSON.stringify(user);
    try {
      const response = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });
      const data = await response.json();
      console.log("test", data);
      window.history.back();
    } catch (error) {
      console.log("fail", data);
    }
  }

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const [selectedImage, setSelectedImage] = useState(s6);

  // Function to handle image selection
  const handleImageChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedImage(selectedValue);
    updateUser("image", selectedValue);
  };

  return (
    <div className="p-5 rounded-lg mt-5 bg-[#f1efefe9]">
      <form
        onSubmit={createUser}
        className="flex flex-wrap justify-between"
      >
        <input
          onChange={(e) => updateUser("username", e.target.value)}
          className="w-[45%] m-4 p-2 rounded-md"
          type="text"
          placeholder="Username"
          name="username"
          required
        />
        <input
          onChange={(e) => updateUser("email", e.target.value)}
          className="w-[45%] m-4 p-2 rounded-md"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          onChange={(e) => updateUser("password", e.target.value)}
          className="w-[45%] m-4 p-2 rounded-md"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input
          onChange={(e) => updateUser("phone", e.target.value)}
          className="w-[45%] m-4 p-2 rounded-md"
          type="number"
          placeholder="Phone"
          name="phone"
        />
        <input
          onChange={(e) => updateUser("role", e.target.value)}
          className="w-[45%] m-4 p-2 rounded-md"
          type="text"
          placeholder="Role"
          name="role"
        />
        <select
          onChange={(e) => updateUser("isAdmin", e.target.value === "true")}
          className="w-[45%] m-4 p-2 rounded-md"
          name="isAdmin"
          id="isAdmin"
        >
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select
          className="w-[45%] m-4 mt-10 p-2 rounded-md"
          name="image"
          id="image"
          onChange={handleImageChange}
          defaultValue={s6}
        >
          <option value={s6}>Select Image</option>
          <option value={s}>User</option>
          <option value={s1}>User 1</option>
          <option value={s2}>User 2</option>
          <option value={s3}>User 3</option>
          <option value={s4}>User 4</option>
          <option value={s5}>User 5</option>
          <option value={s7}>User 6</option>
        </select>

        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Selected User"
            width={140}
            height={140}
            className="object-cover rounded-md absolute top-[64%] left-[69%] transform -translate-x-1/2 -translate-y-1/2"
          />
        )}
        <textarea
          name="address"
          id="address"
          placeholder="Address"
          className="w-[100%] m-4 mt-12 p-8 rounded-md"
          onChange={(e) => updateUser("address", e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="w-[100%] m-4 p-2 rounded-md bg-indigo-950 text-white hover:bg-blue-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
