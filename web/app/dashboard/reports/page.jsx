"use client"; 
import React, { useEffect, useState } from 'react';
import Search from "@/app/component/dashboard/search/search";
import Image from "next/image";
import Report  from './report.jsx'

const ReportPage = () => {
  
  const [criteria1, setCriteria1] = useState('option1');
  const [criteria2, setCriteria2] = useState('option1');
  const [criteria3, setCriteria3] = useState('option1');
  const [criteria4, setCriteria4] = useState('option1');
  const [criteria5, setCriteria5] = useState('option1');

  const handleCriteria1Change = (e) => {
    setCriteria1(e.target.value);
  };

  const handleCriteria2Change = (e) => {
    setCriteria2(e.target.value);
  };

  const handleCriteria3Change = (e) => {
    setCriteria3(e.target.value);
  };

  const handleCriteria4Change = (e) => {
    setCriteria4(e.target.value);
  };

  const handleCriteria5Change = (e) => {
    setCriteria5(e.target.value);
  };
  return (
    <div className="bg-[#f1efefe9] rounded-lg p-4 mt-4">
       <div className="criteria-bar">
      <select value={criteria1} onChange={handleCriteria1Change}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select value={criteria2} onChange={handleCriteria2Change}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select value={criteria3} onChange={handleCriteria3Change}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select value={criteria4} onChange={handleCriteria4Change}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select value={criteria5} onChange={handleCriteria5Change}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
        <Report></Report>
    </div>
  );
};

export default ReportPage;

