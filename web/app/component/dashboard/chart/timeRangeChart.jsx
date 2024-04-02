import React, { useState, useEffect } from "react";
import { ResponsiveTimeRange } from "@nivo/calendar";
import { BASE_URL } from "@/app/constants/Config";

const MyResponsiveTimeRange = () => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/scheduleInfo`);
        const data = await response.json();
        setScheduleData(data);
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      }
    };

    fetchData();
  }, []);

  const aggregateData = () => {
    const aggregatedData = {};
    scheduleData.forEach(schedule => {
      const day = schedule.start.split("T")[0];
      if (aggregatedData[day]) {
        aggregatedData[day] += parseInt(schedule.hour);
      } else {
        aggregatedData[day] = parseInt(schedule.hour);
      }
    });
    return Object.keys(aggregatedData).map(day => ({
      day,
      value: aggregatedData[day]
    }));
  };

  const data = aggregateData();

  const theme = {
    background: "#ffff",
    text: {
      fontSize: 13,
      fill: "#333333",
      outlineWidth: 0,
      outlineColor: "transparent"
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-[24px] font-bold flex justify-center items-center">
          2024
        </h1>
      </div>
      <div className="h-[300px]">
        <ResponsiveTimeRange
          data={data}
          theme={theme}
          from="2024-01-01"
          to="2024-12-31"
          emptyColor="#eeeeee"
          colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
          maxValue={40}
          margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              justify: false,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left",
              translateX: -60,
              translateY: -60,
              symbolSize: 20
            }
          ]}
        />
      </div>
    </div>
  );
};

export default MyResponsiveTimeRange;
