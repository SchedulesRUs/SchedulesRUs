"use client"

import Search from "@/app/component/dashboard/search/search";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/component/dashboard/pagination/pagination";
import { staffMembers } from "@/app/constants";

const Users = () => {

  const [searchUser, setSearchUser] = useState("");

  const handleSearchUser = (event) => {
    setSearchUser(event.target.value);
  };
  const filteredStaffMembers = staffMembers.filter((staff) =>
    staff.title.toLowerCase().includes(searchUser.toLowerCase())
  );

  return (
    <div className="bg-[#f1efefe9] rounded-lg p-4 mt-4">
      <div className="flex items-center justify-between">
        <Search 
        placeholder="Search for a user..." 
        searchUser={searchUser}
        handleSearchUser={handleSearchUser}
        />
        <Link href="/dashboard/teams/add">
          <button className="p-[6px] bg-indigo-950 rounded-lg text-white text-[14px]">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full m-3">
        <thead>
          <tr className="font-bold items-center">
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {filteredStaffMembers.map((staff) => (
            <tr key={staff.id}>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src={staff.img}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-lg object-cover p-[3px]"
                  />
                  {staff.title}
                </div>
              </td>
              <td>{staff.email}</td>
              <td>{staff.phone_no}</td>
              <td>{staff.role}</td>
              <td>{staff.status}</td>
              <td>
                <div className="flex">
                  <Link href="/dashboard/teams/test">
                    <button className="bg-green-600 text-white text-[12px] rounded-lg p-1 mr-2">
                      View
                    </button>
                    <button className="bg-red-700 text-white text-[12px] rounded-lg p-1">
                      Delete
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Users;
