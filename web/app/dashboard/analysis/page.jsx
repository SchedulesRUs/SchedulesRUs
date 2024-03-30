"use client";
import React, { useState } from "react";
import BarChart from "@/app/component/dashboard/chart/barChart";
import PieChart from "@/app/component/dashboard/chart/pieChart";
import MyResponsiveTimeRange from "@/app/component/dashboard/chart/timeRangeChart";

const HourSummary = () => {
  const [chartType, setChartType] = useState("pie");

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  const chartData = {
    // Chart data here, depending on the library you are using
  };

  let chartComponent;
  if (chartType === "pie") {
    chartComponent = <PieChart />;
  } else if (chartType === "bar") {
    chartComponent = <BarChart />;
  } else if (chartType === "timeRange") {
    chartComponent = <MyResponsiveTimeRange />;
  }

  return (
    <div className="mt-5">
      <div className="font-bold flex justify-center items-center text-[24px]">
        <h1 className="mb-5">Employee Management Analysis</h1>
      </div>
      <div>
        <div style={chartTypeButtonsStyles.container}>
          <button
            onClick={() => handleChartTypeChange("pie")}
            style={chartTypeButtonsStyles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Employee's Role
          </button>
          <button
            onClick={() => handleChartTypeChange("bar")}
            style={chartTypeButtonsStyles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Employee's Working Hours
          </button>
          <button
            onClick={() => handleChartTypeChange("timeRange")}
            style={chartTypeButtonsStyles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Overview of working hours
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>{chartComponent}</div>
      </div>
    </div>
  );
};

export default HourSummary;

const chartTypeButtonsStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    height: "40px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    margin: "0 10px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
