import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { BASE_URL } from "@/app/constants/Config";

const PieChart = () => {
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/user`);
        const userData = await response.json();
        const roleCounts = {};

        userData.forEach(user => {
          const role = user.role;
          roleCounts[role] = (roleCounts[role] || 0) + 1;
        });

        const data = Object.entries(roleCounts).map(([role, count]) => ({
          id: role,
          label: role,
          value: count
        }));

        setChartData(data);

        // Prepare data for table
        const tableData = Object.entries(roleCounts).map(([role, count]) => ({
          role,
          count
        }));

        setTableData(tableData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const theme = {
    background: "#F1EFEFE9",
    text: {
      fontSize: 14,
      fill: "#333333",
      outlineWidth: 0,
      outlineColor: "transparent",
    },
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ height: 400, marginBottom: 20 }}>
        <ResponsivePie
          data={chartData}
          theme={theme}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: "nivo" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: "color" }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
      <table style={{ borderCollapse: "collapse", width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>Role</th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>Number of Role</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{row.role}</td>
              <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PieChart;
