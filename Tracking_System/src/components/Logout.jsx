import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-pink-200 via-red-300 to-peach-30">
      <h2 className="text-2xl font-bold mb-5">Logged Out Successfully!</h2>
      <p className="mb-5">You have been logged out. Please login again to continue.</p>
      <Link to="/login" className="bg-blue-500 hover:bg-red-600 text-white p-2 rounded">
        Go to Login!
      </Link>
    </div>
  );
}
