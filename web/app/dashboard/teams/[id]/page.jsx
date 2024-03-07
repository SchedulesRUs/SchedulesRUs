"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { s, s1, s2, s3, s4, s5, s6, s7 } from "@/app/asset";

const SingleUserPage = ({ params }) => {
  const { id } = params;
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    address: "",
    isAdmin: false,
    image: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetchUserData(id);
    }
  }, [id]);

  async function fetchUserData(id) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://schedules-r-us-78b737cd078f.herokuapp.com/user/getuser?id=${id}`
      );
      const data = await response.json();
      setUserData(data);
      setFormData({
        username: data.username,
        email: data.email,
        password: data.password,
        phone: data.phone,
        role: data.role,
        address: data.address,
        isAdmin: data.isAdmin,
        image: data.image,
      });
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  async function updateUserInfo(id) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://schedules-r-us-78b737cd078f.herokuapp.com/user/getuser?id=${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const updatedUserData = await response.json();
        setUserData(updatedUserData);
        setSuccessMessage("User updated successfully!!!");
        console.log("User updated successfully:", updatedUserData);
      } else {
        console.error("Failed to update user:", response.statusText);
        setSuccessMessage("User updated failed!!!");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false);
    }
  }

  const [selectedImage, setSelectedImage] = useState(s6);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "image") {
      setSelectedImage(value); // Update selected image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo(id);
  };

  return (
    <div className="flex gap-4 mt-4">
      <div className="flex-1 bg-[#f1efefe9] rounded-xl h-max">
        <div className="relative p-3">
          {userData && userData.image && (
            <Image
              src={userData.image}
              alt="userProfile"
              width={400}
              height={300}
              className="rounded-xl mb-2"
            />
          )}
          {!userData ||
            (!userData.image && (
              <Image
                src={s6}
                alt=""
                width={400}
                height={300}
                className="rounded-xl mb-2"
              />
            ))}
        </div>
        <div className="flex justify-center items-center mb-4 font-bold">
          {userData && userData.username}
        </div>
      </div>
      <div className="flex-[3] bg-[#f1efefe9] p-3 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col p-2">
          <label className="mb-2 font-bold">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Password</label>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Address</label>
          <textarea
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Is Admin?</label>
          <input
            type="text"
            name="isAdmin"
            value={formData.isAdmin}
            onChange={handleInputChange}
            className="rounded-md p-2 mb-2"
          />

          <div className="flex items-center mt-2 mb-2 mr-10">
            <h1 className="mr-5 font-bold">Update Image</h1>
            <select
              className="mr-10 p-2 rounded-md"
              name="image"
              id="image"
              onChange={handleInputChange}
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
                className="object-cover rounded-md"
              />
            )}
          </div>
          {loading ? (
            <div className="text-red-700 mb-2 font-bold flex justify-center items-center">
              Loading...
            </div>
          ) : (
            successMessage && (
              <div className="text-green-600 mb-2 font-bold flex justify-center items-center">
                {successMessage}
              </div>
            )
          )}
          <button
            type="submit"
            className="w-full p-4 bg-indigo-950 text-white font-bold mt-3 rounded-lg"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
