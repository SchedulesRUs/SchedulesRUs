import React from "react";
import Card from "../component/dashboard/card/card";
import Card2 from "../component/dashboard/card/card2";
import Rightbar from "../component/dashboard/rightbar/rightbar";
import ViewScheduleOnly from "../component/dashboard/viewSchedule/viewSchedule";
import Chart from "../component/dashboard/chart/barChart";
import data from "../constants/data.json";

const Dashboard = () => {
  return (
    <main className="flex gap-4 mt-5">
      <div className="flex-[3] flex-col gap-[20px] ">
        <div className="flex gap-[14px] justify-between mb-5">
          <Card />
          <Card2 />
          
        </div>
        <ViewScheduleOnly />
        <Chart data={data} />
      </div>
      
      <div className="flex-1">
        <Rightbar />
      </div>
    </main>
  );
};

export default Dashboard;
