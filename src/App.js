// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import TaskList from "./components/TaskList";
// import TaskDetails from "./components/TaskDetails";
// import Login from "./components/Login";
// import "./App.css";
// import TodayTask from "./components/TodayTask";

// function App() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const [currentView, setCurrentView] = useState("all");
//   const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

//   const toggleDarkMode = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   return (
//     <div>
//       <div className="head">
//         <Navbar />
//       </div>
//       <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
//         <div className="main-content">
//           {isAuthenticated ? (
//             <>
//               <Sidebar
//                 setCurrentView={setCurrentView}
//                 currentView={currentView}
//               />

//               {currentView === "all" && <TaskList />}
//               {currentView === "today" && <TodayTask />}
//               <button
//                 style={{
//                   width: "72px",
//                   height: "75px",
//                   backgroundColor: "transparent", // No background color
//                   border: "none", // No border
//                   cursor: "pointer", // Change cursor to pointer on hover
//                   color: isDarkMode ? "white" : "black", // Text color based on the theme
//                   fontSize: "35px",
//                 }}
//                 onClick={toggleDarkMode}
//                 className="dark-mode-toggle"
//               >
//                 {isDarkMode ? "☀️" : "🌙"}
//               </button>
//               <TaskDetails />
//             </>
//           ) : (
//             <Login />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import Login from "./components/Login";
import "./App.css";
import TodayTask from "./components/TodayTask";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [currentView, setCurrentView] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div>
      <div className="head">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> {/* Pass props here */}
      </div>
      <div className={`app-container ${isDarkMode ? "dark" : "light"}`}>
        <div className="main-content">
          {isAuthenticated ? (
            <>
              <Sidebar
                setCurrentView={setCurrentView}
                currentView={currentView}
              />
              {currentView === "all" && <TaskList />}
              {currentView === "today" && <TodayTask />}
              <TaskDetails />
            </>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
