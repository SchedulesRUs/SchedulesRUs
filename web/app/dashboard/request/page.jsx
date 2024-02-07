"use client"; 
import React, { useState } from 'react';
import Search from "@/app/component/dashboard/search/search";
import Image from "next/image";
import { userRequests } from "@/app/constants"; // Ensure correct import path

const RequestsPage = () => {
  const [requests, setRequests] = useState(userRequests.map(request => ({
    ...request,
    status: 'Pending' // Initialize all requests as Pending
  })));

  // Function to change the status of a request
  const changeStatus = (id, newStatus) => {
    const updatedRequests = requests.map(request => {
      if (request.id === id) {
        return { ...request, status: newStatus };
      }
      return request;
    });
    setRequests(updatedRequests);
  };

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
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.requestedDate}</td>
              <td>{request.type}</td>
              <td>{request.period}</td>
              <td>{request.staff.title}</td>
              <td>{request.status}</td>
              <td>
                {request.status === 'Pending' && (
                  <div className="flex justify-around">
                    <button 
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                      onClick={() => changeStatus(request.id, 'Approved')}
                    >
                      Approve
                    </button>
                    <button 
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => changeStatus(request.id, 'Denied')}
                    >
                      Deny
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsPage;

