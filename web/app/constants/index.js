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
          path: "/dashboard/teams",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Scheduling",
          path: "/dashboard/schedules",
          icon: <MdShoppingBag />,
        },
        {
          title: "Management",
          path: "/dashboard/management",
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
      ],
    },
  ];


export {menuItems};
  