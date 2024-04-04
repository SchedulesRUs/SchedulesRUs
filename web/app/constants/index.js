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

import { user, user2, user3, user4, user5 } from "../asset";

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
        title: "Data Visualization",
        path: "/dashboard/analysis",
        icon: <MdPeople />,
      },
      {
        title: "Staff Request",
        path: "/dashboard/request",
        icon: <BiSolidMessageRoundedError />,
      },
      {
        title: "Staff Availability",
        path: "/dashboard/availability",
        icon: <MdWork />,
      },
      {
        title: "Announcement",
        path: "/dashboard/announcement",
        icon: <MdAttachMoney />,
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
    email: "asdasd.m95@gmail.com",
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
    title: "Felix",
    email: "felix.supersnowboarding@gmail.com",
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
];

export const userRequests = [
  {
    id: "1",
    requestedDate: "04/06/18",
    type: "Holiday",
    period: "15/07/18 - 25/08/18",
    staff: {
      ...staffMembers.find((member) => member.id === "1"), // Spread operator to copy staff member info
    },
    status: "Approved",
  },
  {
    id: "2",
    requestedDate: "05/06/18",
    type: "Sick Leave",
    period: "16/07/18 - 18/07/18",
    staff: {
      ...staffMembers.find((member) => member.id === "2"),
    },
    status: "Pending",
  },
  // ... more user requests
];

const empScheudule = [
  {
    title: "Paradon",
    start: "2024-01-31T15:00:00.000Z",
    end: "2024-01-31T24:00:00.000Z",
    id: "1",
    color: "#ff5733",
  },
  {
    title: "Khang",
    start: "2024-02-01T15:00:00.000Z",
    end: "2024-02-01T18:30:00.000Z",
    id: "2",
    color: "#33ff57",
  },
  {
    title: "Paradon",
    start: "2024-02-01T24:00:00.000Z",
    end: "2024-01-01T05:00:00.000Z",
    id: "3",
    color: "#5733ff",
  },
  {
    title: "Paradon",
    start: "2024-02-3T15:00:00.000Z",
    end: "2024-01-31T24:00:00.000Z",
    id: "4",
    color: "#f6e05e",
  },
];

export { menuItems, staffMembers, empScheudule };
