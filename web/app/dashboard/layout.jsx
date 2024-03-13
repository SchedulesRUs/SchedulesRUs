import React from "react";
import Sidebar from "../component/dashboard/sidebar/sidebar";
import Navbar from "../component/dashboard/navbar/navbar";
import Footer from "../component/dashboard/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex bg-[#F1EFEFE9] p-8">
        <Sidebar />
      </div>
      <div className="flex-1 p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
