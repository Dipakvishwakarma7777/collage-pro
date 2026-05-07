import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FacultyDashboard() {
  const user = useSelector((state) => state.auth.user);

  const myEvents = [
    { id: 1, name: "Web Development Workshop", date: "May 20, 2026", attendees: 85, status: "upcoming" },
    { id: 2, name: "Advanced JavaScript", date: "May 27, 2026", attendees: 62, status: "upcoming" },
  ];

  const stats = [
    { label: "Events Created", value: "8", icon: "📅", color: "blue" },
    { label: "Total Attendees", value: "487", icon: "👥", color: "green" },
    { label: "Avg Rating", value: "4.8", icon: "⭐", color: "yellow" },
    { label: "Certificates Issued", value: "340", icon: "🏆", color: "purple" },
  ];

  const recentActivity = [
    { event: "New registration for Web Dev", time: "2 hours ago", icon: "📝" },
    { event: "Certificate issued to 5 students", time: "1 day ago", icon: "🏆" },
    { event: "Event feedback received", time: "2 days ago", icon: "⭐" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8 bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 rounded-lg shadow-lg flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome, {user?.name || "Faculty"}! 👨‍🏫</h1>
            <p className="text-purple-100">Manage your events and track student engagement</p>
          </div>
          <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition">
            + Create Event
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, idx) => {
            const colorMap = {
              blue: "border-blue-500 text-blue-600",
              green: "border-green-500 text-green-600",
              yellow: "border-yellow-500 text-yellow-600",
              purple: "border-purple-500 text-purple-600",
            };
            return (
              <div key={idx} className={`bg-white p-6 rounded-lg shadow-lg border-l-4 ${colorMap[stat.color]} hover:shadow-xl transition`}>
                <div className="text-3xl mb-3">{stat.icon}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <div className={`text-3xl font-bold mt-2 ${colorMap[stat.color]}`}>{stat.value}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">📋 My Events</h2>
                <p className="text-sm text-gray-600 mt-1">Events you're managing</p>
              </div>
              <button className="text-purple-600 hover:text-purple-700 font-semibold">
                View All →
              </button>
            </div>

            {myEvents.length > 0 ? (
              <div className="space-y-4">
                {myEvents.map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg hover:shadow-lg transition bg-gradient-to-r from-purple-50 to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{event.name}</h3>
                        <p className="text-sm text-gray-600">📅 {event.date}</p>
                      </div>
                      <div className="text-right mr-6">
                        <p className="text-sm text-gray-600">Attendees</p>
                        <p className="text-2xl font-bold text-purple-600">{event.attendees}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 border border-purple-300 text-purple-600 rounded hover:bg-purple-50 transition font-medium">
                          Edit
                        </button>
                        <button className="px-4 py-2 border border-red-300 text-red-600 rounded hover:bg-red-50 transition font-medium">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No events created yet</p>
            )}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">📊 Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Event Attendance</span>
                  <span className="text-sm font-bold text-purple-600">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Satisfaction Rate</span>
                  <span className="text-sm font-bold text-green-600">4.8/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: "96%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Certificate Completion</span>
                  <span className="text-sm font-bold text-blue-600">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">📱 Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b last:border-b-0 hover:bg-gray-50 px-2 rounded transition">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{activity.icon}</span>
                    <span className="text-sm font-medium">{activity.event}</span>
                  </div>
                  <span className="text-xs text-gray-600">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Link to="/faculty-event-management" className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform">
              <h3 className="text-xl font-bold mb-2">📝 Manage Events</h3>
              <p className="text-blue-100">Create, edit, or delete events</p>
              <button className="mt-3 px-4 py-2 bg-white text-blue-600 rounded font-semibold hover:bg-blue-50">
                Go to Manager →
              </button>
            </Link>
            <Link to="/faculty-student-tracking" className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform">
              <h3 className="text-xl font-bold mb-2">👥 Track Students</h3>
              <p className="text-green-100">Monitor attendance and performance</p>
              <button className="mt-3 px-4 py-2 bg-white text-green-600 rounded font-semibold hover:bg-green-50">
                View Students →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;
