import React from "react";
import Card from "../component/dashboard/card/card";
import Rightbar from "../component/dashboard/rightbar/rightbar";
import Schedule from "./schedules/page";
import Chart from "../component/dashboard/chart/chart";
import data from "../constants/data.json"

const Dashboard = () => {
  return (
    <main className="flex gap-10 mt-5">

      <div className="flex-[3] flex-col gap-[20px] ">
        <div className="flex gap-[14px] justify-between mb-5">
          <Card />
          <Card />
          <Card />
        </div>
        <Schedule />
        <Chart data={data}/>
      </div>

      <div className="flex-1">
        <Rightbar />
      </div>

    </main>
  );
};

export default Dashboard;
