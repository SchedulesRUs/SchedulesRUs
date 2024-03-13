import React from "react";
import Card from "../component/dashboard/card/card";
import Card2 from "../component/dashboard/card/card2";
import Rightbar from "../component/dashboard/rightbar/rightbar";
import ViewScheduleOnly from "../component/dashboard/viewSchedule/viewSchedule";
import Chart from "../component/dashboard/chart/barChart";
import data from "../constants/data.json";

const Dashboard = () => {
  return (
    <main className="flex flex-col md:flex-row md:gap-4 md:mt-5">
      <div className="md:flex-[3] md:flex md:flex-col md:gap-[20px]">
        <div className="flex flex-col sm:flex-row md:gap-4 md:justify-between mb-5">
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
