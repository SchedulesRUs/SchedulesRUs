"use client"; 
// Import React, useState, useEffect if you plan to fetch data dynamically or manipulate it
import React from 'react';
import Search from "@/app/component/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/component/dashboard/pagination/pagination";
import { userRequests } from "@/app/constants"; // Adjust the path as necessary

const RequestsPage = () => {
  // Directly using userRequests for rendering as it's static data
  // For dynamic data fetching, you'd use useState and useEffect

  return (
    <div className="bg-[#f1efefe9] rounded-lg p-4 mt-4">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a request..." />
      </div>
      <table className="w-full m-3">
        <thead>
          <tr className="font-bold items-center">
            <td>Requested Date</td>
            <td>Type</td>
            <td>Period</td>
            <td>Staff Name</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {userRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.requestedDate}</td>
              <td>{request.type}</td>
              <td>{request.period}</td>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src={request.staff.img} // Ensure this path is correct and accessible
                    alt={request.staff.title}
                    width={40}
                    height={40}
                    className="rounded-lg object-cover p-[3px]"
                  />
                  {request.staff.title}
                </div>
              </td>
              <td>{request.status}</td>
              <td>
                <div className="flex gap-2">
                  {/* Using Link without <a> tag for Next.js 12+ */}
                  <Link href={`/dashboard/requests/${request.id}`} passHref>
                    <button className="text-blue-600 hover:text-blue-800">Edit</button>
                  </Link>
                  <button className="text-red-600 hover:text-red-800" onClick={() => console.log('Delete functionality here')}>
                    Delete
                  </button>
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

export default RequestsPage;

