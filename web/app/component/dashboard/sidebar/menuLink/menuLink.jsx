"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <Link
      href={item.path}
      className={`flex p-3 mb-1 items-center gap-2 rounded-2xl ${isActive ? "bg-indigo-950 text-[#FCFCFC]" : "hover:bg-indigo-950 hover:text-[#FCFCFC]"}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
