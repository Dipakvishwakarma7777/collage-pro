import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";

function AdminDashboard() {
  const user = useSelector((state) => state.auth.user);

  const stats = [
    { label: "Total Events", value: "25", color: "blue", icon: "📅", trend: "+3 this month" },
    { label: "Total Students", value: "1200", color: "green", icon: "👥", trend: "+150 new" },
    { label: "Total Registrations", value: "3500", color: "purple", icon: "✓", trend: "+500 active" },
    { label: "Certificates Issued", value: "1800", color: "yellow", icon: "🏆", trend: "+200 verified" },
  ];

  const recentEvents = [
    { id: 1, name: "Hackathon 2026", date: "May 15, 2026", registrations: 450, status: "Active" },
    { id: 2, name: "Web Dev Workshop", date: "May 20, 2026", registrations: 320, status: "Active" },
    { id: 3, name: "AI Summit", date: "May 25, 2026", registrations: 280, status: "Pending" },
  ];

  const quickActions = [
    { label: "Manage Events", link: "/manage-events", icon: "📝", color: "blue" },
    { label: "View Reports", link: "#", icon: "📊", color: "green" },
    { label: "Manage Users", link: "#", icon: "👤", color: "purple" },
    { label: "System Settings", link: "#", icon: "⚙️", color: "yellow" },
  ];

  const colorMap = {
    blue: "border-blue-500 text-blue-600",
    green: "border-green-500 text-green-600",
    purple: "border-purple-500 text-purple-600",
    yellow: "border-yellow-500 text-yellow-600",
  };

  const bgColorMap = {
    blue: "bg-blue-50 hover:bg-blue-100",
    green: "bg-green-50 hover:bg-green-100",
    purple: "bg-purple-50 hover:bg-purple-100",
    yellow: "bg-yellow-50 hover:bg-yellow-100",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8 bg-gradient-to-r from-slate-700 to-slate-800 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard 👨‍💼</h1>
          <p className="text-slate-300">Welcome back, {user?.name || "Administrator"}! Manage events, users, and system settings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-lg shadow-lg border-l-4 ${colorMap[stat.color]} hover:shadow-xl transition`}>
              <div className="flex items-start justify-between mb-2">
                <div className="text-3xl">{stat.icon}</div>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">{stat.trend}</span>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <div className={`text-3xl font-bold ${colorMap[stat.color]}`}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">📅 Recent Events</h2>
                <p className="text-sm text-gray-600 mt-1">Latest event activity</p>
              </div>
              <Link to="/manage-events" className="text-blue-600 hover:text-blue-700 font-semibold">
                View All →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Event Name</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Date</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700">Registrations</th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEvents.map((event) => (
                    <tr key={event.id} className="border-b hover:bg-gray-50 transition">
                      <td className="px-4 py-3 font-medium">{event.name}</td>
                      <td className="px-4 py-3 text-gray-600">{event.date}</td>
                      <td className="px-4 py-3 text-right font-semibold">{event.registrations}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {event.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button className="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">⚡ Quick Actions</h2>
            <div className="space-y-3">
              {quickActions.map((action, idx) => {
                let href = action.link;
                if (action.label === "Manage Events") href = "/manage-events";
                if (action.label === "View Reports") href = "/admin-reports";
                if (action.label === "Manage Users") href = "/admin-user-management";

                return (
                  <Link
                    key={idx}
                    to={href}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 ${bgColorMap[action.color]} transition hover:border-opacity-100`}
                  >
                    <span className="text-2xl">{action.icon}</span>
                    <span className="font-semibold text-gray-800">{action.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">📊 System Health</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Database Usage</span>
                  <span className="text-sm font-bold text-blue-600">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Server Load</span>
                  <span className="text-sm font-bold text-green-600">42%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: "42%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">API Response Time</span>
                  <span className="text-sm font-bold text-purple-600">125ms</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">👥 User Statistics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-medium">Active Students</span>
                <span className="text-lg font-bold text-blue-600">950</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Active Faculty</span>
                <span className="text-lg font-bold text-green-600">85</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Inactive Users</span>
                <span className="text-lg font-bold text-purple-600">165</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium">Pending Verification</span>
                <span className="text-lg font-bold text-yellow-600">23</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">🆘 Need Help?</h3>
          <p className="mb-4 text-gray-100">Contact the support team or access comprehensive documentation for managing the platform.</p>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
              Contact Support
            </button>
            <button className="px-6 py-2 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
