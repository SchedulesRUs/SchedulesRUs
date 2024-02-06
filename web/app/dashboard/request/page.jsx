"use client"; 
import React, { useState, useEffect } from 'react';
import Search from "@/app/component/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/component/dashboard/pagination/pagination";
import { dayOffRequests } from "@/app/constants"; 

const RequestsPage = () => {
    const [dayOffRequests, setDayOffRequests] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        setTimeout(() => {
          setDayOffRequests([
          ]);
        }, 1000);
      } catch (error) {
        console.error("Failed to fetch day off requests:", error);
      }
    };

    fetchData();
  }, []);

  if (dayOffRequests === null) {
    return <div>Loading...</div>;
  }

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
          {dayOffRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.requestedDate}</td>
              <td>{request.type}</td>
              <td>{request.period}</td>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src={request.staff.img}
                    alt={request.staff.name}
                    width={40}
                    height={40}
                    className="rounded-lg object-cover p-[3px]"
                  />
                  {request.staff.name}
                </div>
              </td>
              <td>
                <span className={`badge ${request.status === 'Approved' ? 'badge-success' : 'badge-warning'}`}>
                  {request.status}
                </span>
              </td>
              <td>
                <div className="flex gap-2">
                  <Link href={`/dashboard/requests/${request.id}`}>
                    <a className="text-blue-600 hover:text-blue-800">Edit</a>
                  </Link>
                  <button className="text-red-600 hover:text-red-800">
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

