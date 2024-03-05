"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { s6 } from "@/app/asset";

const SingleUserPage = ({ params }) => {
  const { id } = params;
  const [userData, setUserData] = useState(null);

  async function fetchUserId(id) {
    try {
      const response = await fetch(`https://schedules-r-us-78b737cd078f.herokuapp.com/user/getuser?id=${id}`);
      const data = await response.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    if (id) {
      fetchUserId(id);
    }
  }, [id]);

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
        <form action="" className="flex flex-col p-2">
          <label className="mb-2 font-bold">Username</label>
          <input
            type="text"
            name="username"
            placeholder={userData ? userData.username : ""}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Email</label>
          <input
            type="text"
            name="email"
            placeholder={userData ? userData.email : ""}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Password</label>
          <input
            type="text"
            name="password"
            placeholder={userData ? userData.password : ""}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={userData ? userData.phone : ""}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Role</label>
          <input
            type="text"
            name="role"
            placeholder={userData ? userData.role : ""}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Address</label>
          <textarea
            type="text"
            name="address"
            placeholder={userData ? userData.address : ""}
            className="rounded-md p-2 mb-2"
          />
          <label className="mb-2 font-bold">Is Admin?</label>
          <select name="isAdmin" id="isAdmin" className="rounded-md p-2 mb-2">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className="w-full p-4 bg-indigo-950 text-white font-bold mt-3 rounded-lg">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
