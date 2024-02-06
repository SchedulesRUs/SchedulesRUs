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

import { BiSolidMessageRoundedError } from "react-icons/bi";


import user from "./../../public/user.jpg";
import user2 from "./../../public/user2.jpg";
import user3 from "./../../public/user3.jpg";
import user4 from "./../../public/user4.jpg";
import user5 from "./../../public/user5.jpg";
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
        {
          title: "Staff Request",
          path: "/dashboard/leave",
          icon: <BiSolidMessageRoundedError />,
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
      id: "1",
      title: "Paradon",
      email: "paradon.m95@gmail.com",
      phone_no: "825-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user,
    },
    {
      id: "2",
      title: "Khitikhun",
      email: "johnfk@gmail.com",
      phone_no: "615-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user2,
    },
    {
      id: "3",
      title: "Khang",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user3,
    },
    {
      id: "4",
      title: "Sailor",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user4,
    },
    {
      id: "5",
      title: "Nancy",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user5,
    },
    {
      id: "6",
      title: "Liz",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user2,
    },
    {
      id: "7",
      title: "Brian",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user3,
    },
    {
      id: "8",
      title: "Bobby",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user4,
    },
    {
      id: "9",
      title: "Wesly",
      email: "toretto.m95@gmail.com",
      phone_no: "444-561-5913",
      role: "GrandMaster",
      status: "Active",
      img: user5,
    },
  ]

  const empScheudule = [
    {title: "Paradon",start: "2024-01-31T15:00:00.000Z", end: "2024-01-31T24:00:00.000Z", id: "1", color: "#ff5733"},
    {title: "Khang",start: "2024-02-01T15:00:00.000Z", end: "2024-02-01T18:30:00.000Z", id: "2", color: "#33ff57"},
    {title: "Paradon", start: "2024-02-01T24:00:00.000Z", end: "2024-01-01T05:00:00.000Z", id: "3", color: "#5733ff"},
    {title: "Paradon", start: "2024-02-3T15:00:00.000Z", end: "2024-01-31T24:00:00.000Z", id: "4", color: "#f6e05e"},
  ]


export { menuItems, staffMembers, empScheudule };
  