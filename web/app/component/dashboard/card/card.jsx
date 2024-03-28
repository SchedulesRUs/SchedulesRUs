import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

// Modify the Card component to accept a prop
const Card = ({ totalStaff }) => {
  return (
    <div className="flex bg-[#F1EFEFE9] p-4 gap-3 rounded-md hover:bg-[#0D1282] hover:text-white cursor-pointer w-[100%]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-4">
        <span>Total Employees</span>
        <span className="font-bold">{totalStaff} Staffs</span>
      </div>
    </div>
  );
};

export default Card;
