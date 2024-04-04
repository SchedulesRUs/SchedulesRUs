"use client";

import React, { useEffect, useState } from "react";
import Search from "@/app/component/dashboard/search/search";
import Image from "next/image";
import Report from "./report.jsx";

const ReportPage = () => {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState("");
  const [criteria1, setCriteria1] = useState("option0");
  const [criteria2, setCriteria2] = useState("option1");
  const [criteria3, setCriteria3] = useState("option1");
  const [criteria4, setCriteria4] = useState("option1");
  const [criteria5, setCriteria5] = useState("option1");

  // Handler for select change
  const handleCriteria1Change = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-[#f1efefe9] rounded-lg p-4 mt-4">
      <div>
        <div style={styles.criteriaBar} className="criteria-bar">
          <span>Choose a report:</span>
          <select
            value={selectedOption}
            onChange={handleCriteria1Change}
            style={styles.select}
          >
            <option value="option0">Select</option>
            <option value="option1">Employee Detail Report</option>
            <option value="option2">Summary Hour By User</option>
            <option value="option3">Schedule Detail</option>
          </select>
        </div>
      </div>

      {selectedOption === "option1" && <Report type="1" />}
      {selectedOption === "option2" && <Report type={2} />}
      {selectedOption === "option3" && <Report type={3} />}
    </div>
  );
};

export default ReportPage;

const styles = {
  criteriaBar: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  select: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
  },
};
