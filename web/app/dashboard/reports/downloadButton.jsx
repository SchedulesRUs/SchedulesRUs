"use client";
import { useState } from 'react';
import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';

const DownloadButton = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);

      // Create a new workbook
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Users');

      // Define the columns
      worksheet.columns = [
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Age', key: 'age', width: 10 },
        { header: 'Email', key: 'email', width: 30 }
      ];

      // Sample data for the Excel report
      const data = [
        { name: 'John Doe', age: 30, email: 'johndoe@example.com' },
        { name: 'Jane Smith', age: 25, email: 'janesmith@example.com' },
        { name: 'Alice Johnson', age: 35, email: 'alicejohnson@example.com' }
      ];

      // Add data rows
      data.forEach(user => {
        worksheet.addRow(user);
      });

      // Set the header row style
      worksheet.getRow(1).eachCell(cell => {
        cell.font = { bold: true };
      });

      // Generate Excel file as a Blob
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Trigger file download
      saveAs(blob, 'users_report.xlsx');
      
      setDownloading(false);
    } catch (error) {
      console.error('Error generating Excel file:', error);
      setDownloading(false);
    }
  };

  return (
    <button onClick={handleDownload} disabled={downloading}>
    {downloading ? 'Downloading...' : 'Download Report'}
  </button>  )

};

export default DownloadButton;
