import { Link } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt, FaCog } from "react-icons/fa";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 p-4 border-b">
            <FaUserCircle className="text-3xl text-teal-600" />
            <span className="font-semibold text-gray-700">My Profile</span>
          </div>
          <nav className="flex flex-col gap-2 p-4">
            <Link
              to="/dashboard"
              className="text-gray-700 hover:bg-teal-50 hover:text-teal-700 px-3 py-2 rounded"
            >
              Dashboard
            </Link>
            <Link
              to="/book"
              className="text-gray-700 hover:bg-teal-50 hover:text-teal-700 px-3 py-2 rounded"
            >
              Book Session
            </Link>
            <Link
              to="/activities"
              className="text-gray-700 hover:bg-teal-50 hover:text-teal-700 px-3 py-2 rounded"
            >
              Mindful Activities
            </Link>
            <Link
              to="/chat"
              className="text-gray-700 hover:bg-teal-50 hover:text-teal-700 px-3 py-2 rounded"
            >
              Chat
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2 p-4 border-t">
          <button className="flex items-center gap-2 text-gray-600 hover:text-teal-600">
            <FaCog />
            Settings
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-teal-600">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
