"use client"; 
import React, { useEffect, useState } from 'react';
import Search from "@/app/component/dashboard/search/search";
import Image from "next/image";
import Report  from './report.jsx'

const ReportPage = () => {
  return (
    <div className="bg-[#f1efefe9] rounded-lg p-4 mt-4">
        <Report></Report>
    </div>
  );
};

export default ReportPage;

