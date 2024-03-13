"use client";
import React, { useEffect, useState } from "react";
import Search from "@/app/component/dashboard/search/search";
import Image from "next/image";
import { userRequests } from "@/app/constants"; // Ensure correct import path
import { user } from "@/app/asset";
import { BASE_URL } from "@/app/constants/Config";

const RequestsPage = () => {
  const [allRequest, setAllRequest] = useState([]);
  const [isError, setErrorStatus] = useState(true);

  async function fetchAllRequest() {
    try {
      const response = await fetch(`${BASE_URL}/request`);

      const data = await response.json();
      setAllRequest(data);
      console.log("setAllRequest", data);

      // return data;
    } catch (error) {}
  }
  useEffect(() => {
    fetchAllRequest();
  }, []);

  async function changeStatusOnDB(id, newStatus) {
    try {
      const response = await fetch(
        `${BASE_URL}/request/update-request?id=${id}&newStatus=${newStatus}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      console.log("test", data);
    } catch (error) {
      console.log("fail", data);
    }
  }

  async function changeStatus(id, newStatus) {
    try {
      changeStatusOnDB(id, newStatus);
      const updatedRequests = allRequest.map((request) => {
        if (request.id === id) {
          // Update the status of the matched request
          return { ...request, status: newStatus };
        }
        // For requests that don't match the id, return them unchanged
        return request;
      });
      // Set the updated requests to state
      setAllRequest(updatedRequests);
    } catch (error) {
      throw error;
    }
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
            <td>From</td>
            <td>To</td>
            <td>Staff Name</td>
            <td>Reason</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {allRequest.map((request) => (
            <tr key={request.id}>
              <td>{request.created_date}</td>
              <td>
                {new Date(request.start * 1000).getFullYear() +
                  "-" +
                  ("0" + (new Date(request.start * 1000).getMonth() + 1)).slice(
                    -2,
                  ) +
                  "-" +
                  ("0" + new Date(request.start * 1000).getDate()).slice(-2) +
                  " " +
                  ("0" + new Date(request.start * 1000).getHours()).slice(-2) +
                  ":" +
                  ("0" + new Date(request.start * 1000).getMinutes()).slice(
                    -2,
                  ) +
                  ":" +
                  ("0" + new Date(request.start * 1000).getSeconds()).slice(
                    -2,
                  ) +
                  " " +
                  (new Date(request.start * 1000).getHours() >= 12
                    ? "PM"
                    : "AM")}
              </td>
              <td>
                {new Date(request.end * 1000).getFullYear() +
                  "-" +
                  ("0" + (new Date(request.end * 1000).getMonth() + 1)).slice(
                    -2,
                  ) +
                  "-" +
                  ("0" + new Date(request.end * 1000).getDate()).slice(-2) +
                  " " +
                  ("0" + new Date(request.end * 1000).getHours()).slice(-2) +
                  ":" +
                  ("0" + new Date(request.end * 1000).getMinutes()).slice(-2) +
                  ":" +
                  ("0" + new Date(request.end * 1000).getSeconds()).slice(-2) +
                  " " +
                  (new Date(request.end * 1000).getHours() >= 12 ? "PM" : "AM")}
              </td>

              <td>{request.username}</td>
              <td>{request.reason}</td>
              <td>{request.status}</td>
              <td>
                {request.status === "Pending" && (
                  <div className="flex justify-start space-x-2">
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                      onClick={() => changeStatus(request.id, "Approved")}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => changeStatus(request.id, "Denied")}
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
