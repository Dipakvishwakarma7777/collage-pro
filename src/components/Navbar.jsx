import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setUserMenuOpen(false);
    navigate("/");
  };

  const getDashboardLink = () => {
    const links = {
      student: "/student-dashboard",
      faculty: "/faculty-dashboard",
      admin: "/admin-dashboard",
    };
    return links[role] || "/student-dashboard";
  };

  const getRoleLabel = () => {
    const labels = {
      student: "👨‍🎓 Student",
      faculty: "👨‍🏫 Faculty",
      admin: "👨‍💼 Admin",
    };
    return labels[role] || "Student";
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          📅 MCA Event
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/events" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Events
          </Link>
          <Link to="/calendar" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Calendar
          </Link>
          <Link to="/chat" className="text-gray-700 hover:text-blue-600 transition font-medium">
            Community
          </Link>
          <Link to="/ai-recommendation" className="text-gray-700 hover:text-blue-600 transition font-medium">
            AI Suggestion
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50 transition"
              >
                <span className="text-xl">👤</span>
                <div className="text-left">
                  <span className="text-sm font-medium block">{user.name || user.email}</span>
                  <span className="text-xs text-gray-600">{getRoleLabel()}</span>
                </div>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                  <div className="p-3 border-b">
                    <p className="text-sm font-semibold">{user.name || user.email}</p>
                    <p className="text-xs text-gray-600 mt-1">{getRoleLabel()}</p>
                  </div>
                  <Link
                    to={getDashboardLink()}
                    className="block px-4 py-2 hover:bg-gray-50 transition"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    📊 Dashboard
                  </Link>
                  {role === "student" && (
                    <>
                      <Link
                        to="/student-profile"
                        className="block px-4 py-2 hover:bg-gray-50 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        📋 My Profile
                      </Link>
                      <Link
                        to="/student-events"
                        className="block px-4 py-2 hover:bg-gray-50 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        🎯 Browse Events
                      </Link>
                      <Link
                        to="/certificates"
                        className="block px-4 py-2 hover:bg-gray-50 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        🏆 Certificates
                      </Link>
                      <Link
                        to="/payment"
                        className="block px-4 py-2 hover:bg-gray-50 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        💳 Payments
                      </Link>
                    </>
                  )}
                  {role === "faculty" && (
                    <>
                      <Link
                        to="/faculty-event-management"
                        className="block px-4 py-2 hover:bg-gray-50 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        📝 Manage Events
                      </Link>
                      <Link
                        to="/faculty-student-tracking"
                        className="block px-4 py-2 hover:bg-gray-50 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        👥 Track Students
                      </Link>
                    </>
                  )}
                  {role === "admin" && (
                    <>
                      <Link
                        to="/manage-events"
                        className="block px-4 py-2 hover:bg-gray-50 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        📝 Manage Events
                      </Link>
                      <Link
                        to="/admin-user-management"
                        className="block px-4 py-2 hover:bg-gray-50 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        👥 User Management
                      </Link>
                      <Link
                        to="/admin-reports"
                        className="block px-4 py-2 hover:bg-gray-50 transition"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        📊 Reports & Analytics
                      </Link>
                    </>
                  )}
                  <div className="border-t">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                    >
                      🚪 Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <Link to="/events" className="block px-6 py-3 hover:bg-gray-100">
            Events
          </Link>
          <Link to="/calendar" className="block px-6 py-3 hover:bg-gray-100">
            Calendar
          </Link>
          <Link to="/chat" className="block px-6 py-3 hover:bg-gray-100">
            Community
          </Link>
          <Link to="/ai-recommendation" className="block px-6 py-3 hover:bg-gray-100">
            AI Suggestion
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
