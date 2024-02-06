import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "@/app/component/dashboard/search/search";
import Pagination from "@/app/component/dashboard/pagination/pagination";
import { staffRequests } from "@/app/constants";

const RequestsPage = () => {
  const safeStaffRequests = staffRequests || [];

  return (
    <div className="bg-[#f1efefe9] rounded-lg p-4 mt-4">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a request..." />
      </div>
      <table className="w-full m-3">
        <thead>
          <tr className="font-bold items-center">
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Role</td>
            <td>Staff Request</td>
          </tr>
        </thead>
        <tbody>
          {safeStaffRequests.map((request) => (
            <tr key={request.id}>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src={request.img}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-lg object-cover p-[3px]"
                  />
                  {request.title}
                </div>
              </td>
              <td>{request.email}</td>
              <td>{request.phone_no}</td>
              <td>{request.role}</td>
              <td>{request.dayOff} - Dayoff</td>
              <td>
                <div className="flex">
                  <Link href={`/dashboard/requests/${request.id}`}>
                    <a className="bg-green-600 text-white text-[12px] rounded-lg p-1 mr-2">Approve</a>
                  </Link>
                  <button className="bg-red-700 text-white text-[12px] rounded-lg p-1">
                    Denine
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

