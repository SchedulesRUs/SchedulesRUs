import React from "react";
import { MdLockClock } from "react-icons/md";

const Card2 = ({ totalHours }) => {
  return (
    <div className="flex bg-[#C0C5CD] p-4 gap-3 rounded-md hover:bg-indigo-950 hover:text-white cursor-pointer w-[100%]">
      <MdLockClock size={24} />
      <div className="flex flex-col gap-4">
        <span>Cumulative Employee Working Hours</span>
        <span className="font-bold">{totalHours} Hours</span>
      </div>
    </div>
  );
};

export default Card2;
