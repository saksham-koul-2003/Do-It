// src/components/Sidebar.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { logoutUser } from "../redux/actions/authActions";
import "./Sidebar.css";

// Register the necessary chart elements
Chart.register(ArcElement, Tooltip, Legend);

function Sidebar({ setCurrentView, currentView }) {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user);
  const tasks = useSelector((state) => state.tasks?.tasks || []);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  // Calculate completed and not completed tasks
  const completedTasks = tasks.filter((task) => task.completed).length;
  const notCompletedTasks = tasks.length - completedTasks;

  // Total tasks
  const totalTasks = tasks.length;

  // Pie chart data
  const data = {
    labels: ["Completed", "Not Completed"],
    datasets: [
      {
        data: [completedTasks, notCompletedTasks],
        backgroundColor: ["#36A2EB", "#000000"],
        hoverBackgroundColor: ["#36A2EB", "#000000"],
      },
    ],
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img
          src={require("../user1.jpeg")}
          alt="Profile"
          className="profile-img"
        />
        <p className="profile-name">Hey, {username}</p>
      </div>
      <div className="menu">
        <ul>
          <li
            onClick={() => setCurrentView("all")}
            className={currentView === "all" ? "active" : ""}
          >
            All Tasks
          </li>
          <li
            onClick={() => setCurrentView("today")}
            className={currentView === "today" ? "active" : ""}
          >
            Today
          </li>
          <li>Important</li>
          <li>Planned</li>
          <li>Assigned to me</li>
          <li>Add List</li>
        </ul>
      </div>

      <div className="pie-chart-container">
        <h3>Total Tasks: {totalTasks}</h3>
        <Pie data={data} />
      </div>

      {/* Uncomment the button below to enable logout */}
      {/* <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button> */}
    </div>
  );
}

export default Sidebar;
