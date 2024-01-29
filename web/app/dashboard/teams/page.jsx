import Search from "@/app/component/dashboard/search/search";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/component/dashboard/pagination/pagination";

const Users = () => {
  return (
    <div className="bg-[#f1efefe9] rounded-lg p-4 mt-4">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/teams/add">
          <button className="p-[6px] bg-indigo-950 rounded-lg text-white text-[14px]">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full m-3">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-2">
                <Image
                  src="/user.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-lg object-cover"
                />
                Donny Dan
              </div>
            </td>
            <td>paradon.m95@gmail.com</td>
            <td>26.01.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className="flex">
                <Link href="/">
                  <button className="bg-green-600 text-white text-[12px] rounded-lg p-1 mr-2">View</button>
                  <button className="bg-red-700 text-white text-[12px] rounded-lg p-1">Delete</button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Users;
