// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar.jsx";
// import Welcome from "./components/Welcome.jsx";
// import Login from "./components/Login.jsx";
// import Signup from "./components/Signup.jsx";
// import Task_Tracker from "./components/Task_Tracker.jsx";
// // import Task_Side from "./components/Task_Side.jsx"


// function App() {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 bg-gray-100 p-5 h-screen overflow-y-auto">
//           <Routes>
//             <Route path="/" element={<Welcome />} />
//             <Route path="/Login" element={<Login />} />
//             <Route path="/Signup" element={<Signup />} />
//             <Route path="/Task_Tracker" element={<Task_Tracker />} />
//             {/* <Route path="/Task_Side" element={<Task_Side />} /> */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Welcome from "./components/Welcome.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Task_Tracker from "./components/Task_Tracker.jsx";
import Logout from "./components/Logout.jsx";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-150 p-5 h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/task-tracker" element={<Task_Tracker />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
