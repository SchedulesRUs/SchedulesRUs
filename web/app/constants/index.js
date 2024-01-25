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
          path: "/dashboard/staffs",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Scheduling",
          path: "/dashboard/scheduling",
          icon: <MdShoppingBag />,
        },
        {
          title: "Management",
          path: "/dashboard/request",
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
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
        {
          title: "Logout",
          path: "/",
          icon: <MdLogout />,
        }
      ],
    },
  ];


export {menuItems};
  