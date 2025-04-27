import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/logout"); // 👈 Now go to /logout page
  };
  

  return (
    <div className="h-screen w-64 bg-gray-600 text-white flex flex-col p-5 justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-10">Task Tracker</h1>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:bg-blue-300 p-2 rounded">Welcome</Link>
          <Link to="/signup" className="hover:bg-blue-500 p-2 rounded">Signup</Link>
          <Link to="/login" className="hover:bg-blue-500 p-2 rounded">Login</Link>
          <Link to="/task-tracker" className="hover:bg-blue-500 p-2 rounded">Task Tracker</Link>
        </nav>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-10 bg-red-500 hover:bg-red-700 p-2 rounded text-center"
      >
        Logout
      </button>
    </div>
  );
}

