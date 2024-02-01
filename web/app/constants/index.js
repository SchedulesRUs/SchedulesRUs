import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";

import user from "./../../public/user.jpg";
import user2 from "./../../public/user2.jpg";


  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Team Member",
          path: "/dashboard/teams",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Scheduling",
          path: "/dashboard/schedules",
          icon: <MdShoppingBag />,
        },
        {
          title: "Hours Summary",
          path: "/dashboard/hour",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];


  const staffMembers = [
    {
      name: "Donny Pinky",
      email: "paradon.m95@gmail.com",
      phone_no: "825-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user,
    },
    {
      name: "John F Kenedy",
      email: "johnfk@gmail.com",
      phone_no: "615-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user,
    },
    {
      name: "Toretto",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user,
    },
    {
      name: "Toretto",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user,
    },
    {
      name: "Toretto",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user,
    },
    {
      name: "Toretto",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user,
    },
    {
      name: "Toretto",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user,
    },
    {
      name: "Toretto",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user,
    },
    {
      name: "Toretto",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user,
    },
  ]


export {menuItems, staffMembers};
  