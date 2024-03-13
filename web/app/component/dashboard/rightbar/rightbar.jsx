import Image from "next/image";
import React from "react";

const Rightbar = () => {
  return (
    <div className="fixed mr-5">
      <div className="relative bg-[#F1EFEFE9] p-4 rounded-md mb-5">
        <div className="absolute rounded-2xl top-0 right-4 w-[50%] h-[50%]">
          <Image
            src="/chick.jpg"
            alt=""
            fill
            sizes={20}
            className="object-contain opacity-30"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span>Noted</span>
          <h3>Yo Yo</h3>
          <span>He He</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            doloribus id incidunt earum ad recusandae quia sapiente beatae,
            architecto harum obcaecati aut.
          </p>
          <button className="p-1 bg-indigo-950 rounded-md text-white">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
