"use client";

import { useState, useEffect } from "react";
import Search from "@/app/component/dashboard/search/search";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/component/dashboard/pagination/pagination";
import userImage from "../../asset/user.jpg"; // Adjust the path to match the folder structure
import DeleteModal from "@/app/component/dashboard/deleteModal/deleteModel";
import { BASE_URL } from "@/app/constants/Config";

const Users = () => {
  const [allUser, setAllUser] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  //Delete user action
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);


  const handleSearchUser = (event) => {
    setSearchUser(event.target.value);
  };

  const filteredStaffMembers = allUser.filter((staff) =>
    staff.username.toLowerCase().includes(searchUser.toLowerCase())
  );

  async function fetchGetAllUser() {
    try {
      const response = await fetch(
        `${BASE_URL}/user`
      );
      const data = await response.json();
      console.log("test", data);
      console.dir(data);
      setAllUser(data);
      // return data;
    } catch (error) { }
  }

  useEffect(() => {
    fetchGetAllUser();
  }, []);

  //Step No.1
  function handleDeleteModal(user) {
    setShowDeleteModal(true);
    setIdToDelete(Number(user.id));
    // console.log('handleDeleteModal:', idToDelete);
  }

  function handleCloseModal() {
    setShowModal(false);
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  async function handleDelete(id) {
    try {
      await fetch(
        `${BASE_URL}/user/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log("User deleted:", id);
      // Update the local schedule state after deletion
      setAllUser(allUser.filter(user => user.id !== id));
      setShowDeleteModal(false);
      setIdToDelete(null);
    } catch (error) {
      console.error("Error handling delete:", error);
    }
  }

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
            <td>Admin?</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {filteredStaffMembers.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="flex items-center gap-4">
                  <Image
                    src={user.image || userImage}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-lg object-cover p-[3px]"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td>{user.isAdmin}</td>
              <td>
                <div className="flex">
                  <Link href={`/dashboard/teams/${user.id}`}>
                    <button className="bg-green-600 text-white text-[12px] rounded-lg p-1 mr-2">
                      View
                    </button>
                  </Link>
                  <button className="bg-red-700 text-white text-[12px] rounded-lg p-1" onClick={() => handleDeleteModal(user)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
      <DeleteModal
        showModal={showDeleteModal}
        handleDelete={handleDelete}
        handleCloseModal={handleCloseModal}
        idToDelete={idToDelete}
      />
    </div>
  );
};

export default Users;
