import React, { useState } from "react";
import Sidebar from "../../components/SideBar";
import Header from "../../components/Header";
import StatisticsComponent from "../../components/StatisticsComponent";
import "../../App.css";
import ListInvoiceComponent from "../../components/ListInvoiceComponent";
import { useLocation } from "react-router-dom";

const DashboardPage = () => {
  const [fetchedInvoices, setFetchedInvoices] = useState([]);
  const location = useLocation();

  const customerId = location.state && location.state.id;

  const handleApplyAnalytics = (data) => {
    setFetchedInvoices(data);
  };

  console.log("Dashboard", fetchedInvoices);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F4F4F4",
        padding: "0.625rem",
      }}
    >
      <div className="sidebar" style={{ padding: "10px" }}>
        <Sidebar
          onApplyAnalytics={handleApplyAnalytics}
          customerId={customerId}
        />{" "}
      </div>
      <div
        className="rightSide"
        style={{ width: "100%", padding: "25px 70px" }}
      >
        <Header customerId={customerId} />
        <StatisticsComponent />
        <ListInvoiceComponent invoices={fetchedInvoices} />
      </div>
    </div>
  );
};

export default DashboardPage;
