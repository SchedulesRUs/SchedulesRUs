import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";
import { BASE_URL } from "@/app/constants/Config";

const Report = ({type}) => {
  const [allUser, setAllUser] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [downloadingUserReport, setDownloadingUserReport] = useState(false);
  const [downloadingScheduleDetailReport, setScheduleDetailReport] = useState(false);
  const [downloadingSummaryHourByUserReport, setSummaryHourByUserReport] = useState(false);
  const [userReportMessage, setUserReportMessage] = useState("");
  const [scheduleDetailReportMessage, setScheduleDetailReportMessage] = useState("");
  const [summaryHourByUserReportMessage, setSummaryHourByUserReportMessage] = useState("");
  const [userSelectedOption, setUserSelectedOption] = useState('');

   // Handler for select change
   const handleUserSelectedOptionChange = (event) => {
    setUserSelectedOption(event.target.value);
  };

  useEffect(() => {
    fetchGetAllUser();
    fetchGetAllProducts();
  }, []);

  const fetchGetAllUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/user`);
      const data = await response.json();
      console.log("Fetched Users:", data);
      setAllUser(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchGetAllProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/scheduleInfo`);
      const data = await response.json();
      console.log("Fetched Products:", data);
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const generateUserReport = async () => {
    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Users");

    // Define the columns
    worksheet.columns = [
      { header: "Id", key: "id", width: 10 },
      { header: "User Name", key: "username", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone Number", key: "phone", width: 30 },
      { header: "Is Admin", key: "isAdmin", width: 10 },
      { header: "Address", key: "address", width: 60 },
    ];

    // Add rows to the worksheet
    allUser.forEach((user) => {
      worksheet.addRow({
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        address: user.address,
      });
    });

    // Set the style for the header row
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    // Generate Excel file
    const fileName = "users_report.xlsx";
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a Blob from the buffer
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Trigger file download
    saveAs(blob, fileName);

    setUserReportMessage("Users report downloaded successfully!");
    setTimeout(() => setUserReportMessage(""), 5000); // Clear message after 5 seconds

    setSummaryHourByUserReport(false);
  };

  const generateProductReport = async () => {
    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Products");

    // Define the columns
    worksheet.columns = [
      { header: "UserId", key: "id", width: 10 },
      { header: "Employee Name", key: "name", width: 30 },
      { header: "Start", key: "start", width: 60 },
      { header: "End", key: "end", width: 60 },
      { header: "Hour", key: "hour", width: 10 },

    ];

    // Add rows to the worksheet
    allProducts.forEach((scheduleInfo) => {
      worksheet.addRow({
        id: scheduleInfo.id,
        name: scheduleInfo.title,
        start: scheduleInfo.start,
        end: scheduleInfo.end,
        hour:scheduleInfo.hour
      });
    });

    // Set the style for the header row
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    // Generate Excel file
    const fileName = "products_report.xlsx";
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a Blob from the buffer
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Trigger file download
    saveAs(blob, fileName);

    setScheduleDetailReportMessage("Products report downloaded successfully!");
    setTimeout(() => setScheduleDetailReportMessage(""), 5000); // Clear message after 5 seconds

    setScheduleDetailReport(false);
  };


  const generateScheduleInfoByUserReport = async () => {
    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Products");

    // Define the columns
    worksheet.columns = [
      { header: "UserId", key: "id", width: 10 },
      { header: "Employee Name", key: "name", width: 30 },
      { header: "Start", key: "start", width: 60 },
      { header: "End", key: "end", width: 60 },
      { header: "Hour", key: "hour", width: 10 },

    ];
    console.error("userSelectedOption", userSelectedOption);
    console.error("userSelectedOption", allProducts);


    // Add rows to the worksheet
    allProducts.filter(item => item.title == userSelectedOption).forEach((scheduleInfo) => {
      worksheet.addRow({
        id: scheduleInfo.id,
        name: scheduleInfo.title,
        start: scheduleInfo.start,
        end: scheduleInfo.end,
        hour:scheduleInfo.hour
      });
    });

    // Set the style for the header row
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    // Generate Excel file
    const fileName = "products_report.xlsx";
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a Blob from the buffer
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Trigger file download
    saveAs(blob, fileName);

    setSummaryHourByUserReportMessage("Products report downloaded successfully!");
    setTimeout(() => setSummaryHourByUserReportMessage(""), 5000); // Clear message after 5 seconds


    setScheduleDetailReport(false);
  };


  const handleDownloadScheduleInfoByUserReport = async () => {
    try {
      setSummaryHourByUserReport(true);
      await generateScheduleInfoByUserReport();
    } catch (error) {
      console.error("Error generating Schedule Info By User report:", error);
      setSummaryHourByUserReport(false);
    }
  };


  const handleDownloadUserReport = async () => {
    try {
      setDownloadingUserReport(true);
      await generateUserReport();
    } catch (error) {
      console.error("Error generating User report:", error);
      setDownloadingUserReport(false);
    }
  };

  const handleDownloadProductReport = async () => {
    try {
      setScheduleDetailReport(true);
      await generateProductReport();
    } catch (error) {
      console.error("Error generating Product report:", error);
      setScheduleDetailReport(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Excel Report</h1>
      <div className="report-section">

      {type === "1" && (
        <>
        <button
          onClick={handleDownloadUserReport}
          disabled={downloadingUserReport || allUser.length === 0}
        >
          {downloadingUserReport
            ? "Downloading Users..."
            : "Download Users Report"}
        </button>
        {userReportMessage && (
          <p className="success-message">{userReportMessage}</p>
        )}</>
     )}
 </div>
      {type == 2 && (
      <div className="report-section">

<div className="bg-[#f1efefe9] rounded-lg p-4 mt-4">
      <div>
      <div style={styles.criteriaBar} className="criteria-bar">
      <span>Choose a user :</span>
      <select value={userSelectedOption} onChange={handleUserSelectedOptionChange} style={styles.select}>
      {allUser.map((option) => (
        <option key={option.id} value={option.username}>{option.username}</option>
      ))}
      </select>
    </div>
      </div>
      </div>
        <button
          onClick={handleDownloadScheduleInfoByUserReport}
          disabled={downloadingSummaryHourByUserReport || allProducts.length === 0}
        >
          {downloadingSummaryHourByUserReport
            ? "Downloading Summary Hour By User Report..."
            : "Download Summary Hour By User Report"}
        </button>
        {summaryHourByUserReportMessage && (
          <p className="success-message">{summaryHourByUserReportMessage}</p>
        )}
      </div>)
      }

         {type == 3 && (
      <div className="report-section">
        <button
          onClick={handleDownloadProductReport}
          disabled={downloadingScheduleDetailReport || allProducts.length === 0}
        >
          {downloadingScheduleDetailReport
            ? "Downloading Schedule Detail Report..."
            : "Download Schedule Detail Report"}
        </button>
        {scheduleDetailReportMessage && (
          <p className="success-message">{scheduleDetailReportMessage}</p>
        )}
      </div>
      )
      }

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          align-items: center;
          justify-content: center;
        }
        .title {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .report-section {
          margin-bottom: 20px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #007bff;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        button:hover {
          background-color: #0056b3;
        }
        .success-message {
          color: #28a745;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
};

export default Report;

const styles = {
  criteriaBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
  },
};