import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';
import { BASE_URL } from '@/app/constants/Config';

const Report = () => {
  const [allUser, setAllUser] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [downloadingUserReport, setDownloadingUserReport] = useState(false);
  const [downloadingProductReport, setDownloadingProductReport] = useState(false);
  const [userReportMessage, setUserReportMessage] = useState('');
  const [productReportMessage, setProductReportMessage] = useState('');

  useEffect(() => {
    fetchGetAllUser();
    fetchGetAllProducts();
  }, []);

  const fetchGetAllUser = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/user`
      );
      const data = await response.json();
      console.log("Fetched Users:", data);
      setAllUser(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchGetAllProducts = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/products`
      );
      const data = await response.json();
      console.log("Fetched Products:", data);
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const generateUserReport = async () => {
    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Users');

    // Define the columns
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'User Name', key: 'username', width: 30 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone Number', key: 'phone', width: 30 },
      { header: 'Is Admin', key: 'isAdmin', width: 10 },
      { header: 'Address', key: 'address', width: 60 },
    ];

    // Add rows to the worksheet
    allUser.forEach(user => {
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
    const fileName = 'users_report.xlsx';
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a Blob from the buffer
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Trigger file download
    saveAs(blob, fileName);

    setUserReportMessage('Users report downloaded successfully!');
    setTimeout(() => setUserReportMessage(''), 5000); // Clear message after 5 seconds

    setDownloadingUserReport(false);
  };

  const generateProductReport = async () => {
    // Create a new workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Products');

    // Define the columns
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'Product Name', key: 'name', width: 30 },
      { header: 'Price', key: 'price', width: 15 },
      { header: 'Description', key: 'description', width: 60 },
    ];

    // Add rows to the worksheet
    allProducts.forEach(product => {
      worksheet.addRow({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
      });
    });

    // Set the style for the header row
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    // Generate Excel file
    const fileName = 'products_report.xlsx';
    const buffer = await workbook.xlsx.writeBuffer();

    // Create a Blob from the buffer
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Trigger file download
    saveAs(blob, fileName);

    setProductReportMessage('Products report downloaded successfully!');
    setTimeout(() => setProductReportMessage(''), 5000); // Clear message after 5 seconds

    setDownloadingProductReport(false);
  };

  const handleDownloadUserReport = async () => {
    try {
      setDownloadingUserReport(true);
      await generateUserReport();
    } catch (error) {
      console.error('Error generating User report:', error);
      setDownloadingUserReport(false);
    }
  };

  const handleDownloadProductReport = async () => {
    try {
      setDownloadingProductReport(true);
      await generateProductReport();
    } catch (error) {
      console.error('Error generating Product report:', error);
      setDownloadingProductReport(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Excel Report</h1>
      <div className="report-section">
        <button onClick={handleDownloadUserReport} disabled={downloadingUserReport || allUser.length === 0}>
          {downloadingUserReport ? 'Downloading Users...' : 'Download Users Report'}
        </button>
        {userReportMessage && <p className="success-message">{userReportMessage}</p>}
      </div>
      <div className="report-section">
        <button onClick={handleDownloadProductReport} disabled={downloadingProductReport || allProducts.length === 0}>
          {downloadingProductReport ? 'Downloading Products...' : 'Download Products Report'}
        </button>
        {productReportMessage && <p className="success-message">{productReportMessage}</p>}
      </div>

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
