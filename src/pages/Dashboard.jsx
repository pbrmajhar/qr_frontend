import React from "react";
import Sidebar from "./Sidebar";
import './Dashboard.style.css'

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col s2" style={{ backgroundColor: "#4db6" }}>
        <Sidebar />
      </div>

      <div className="col s10">
        <div className="main-content">
          <p>This is the main content</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
