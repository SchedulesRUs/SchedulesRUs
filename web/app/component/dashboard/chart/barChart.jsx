"use client"

import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { BASE_URL } from "@/app/constants/Config";

const BarChart = () => {
  const [data, setData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);

  async function fetchSchedule() {
    try {
      const response = await fetch(`${BASE_URL}/scheduleInfo`);
      const rawData = await response.json();
      console.log("Fetch Schedule:", rawData);

      // Summarize total hours by title
      const summaryData = rawData.reduce((acc, curr) => {
        if (!acc[curr.title]) {
          acc[curr.title] = parseFloat(curr.hour);
        } else {
          acc[curr.title] += parseFloat(curr.hour);
        }
        return acc;
      }, {});

      setSummaryData(summaryData);

      // Convert summaryData object to array
      const formattedData = Object.entries(summaryData).map(([title, hour]) => ({
        title,
        hour,
      }));

      setData(formattedData);
    } catch (error) {
      console.log("Fail", error);
    }
  }

  useEffect(() => {
    fetchSchedule();
  }, []);

  const theme = {
    background: "#F1EFEFE9",
    text: {
      fontSize: 18,
      fill: "#333333",
      outlineWidth: 0,
      outlineColor: "transparent",
    },
  };

  return (
    <div className="flex flex-col">
      <div className="h-[400px]">
        <ResponsiveBar
          data={data}
          keys={["hour"]}
          indexBy="title"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.5}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors="#0096FF"
          theme={theme} // Pass the theme object
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Names",
            legendPosition: "middle",
            legendOffset: 40,
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Working Hours",
            legendPosition: "middle",
            legendOffset: -50,
            truncateTickAt: 0,
          }}
          enableGridX={true}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
        />
      </div>
      <div className="mt-5 mb-5">
        <table style={{ borderCollapse: "collapse", width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>Name</th>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(summaryData).map(([title, hour]) => (
              <tr key={title}>
                <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{title}</td>
                <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{hour}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BarChart;
