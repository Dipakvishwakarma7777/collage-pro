import Navbar from "../../components/Navbar";
import { useState } from "react";

function AdminReportsAnalytics() {
  const [selectedMetric, setSelectedMetric] = useState("events");
  const [dateRange, setDateRange] = useState("month");

  const metrics = [
    { id: "events", label: "Events Analytics", icon: "📅" },
    { id: "users", label: "User Analytics", icon: "👥" },
    { id: "performance", label: "Performance Metrics", icon: "📊" },
    { id: "revenue", label: "Revenue & Payments", icon: "💰" },
  ];

  const eventStats = [
    { month: "January", events: 5, registrations: 250, attendance: 220 },
    { month: "February", events: 7, registrations: 380, attendance: 340 },
    { month: "March", events: 6, registrations: 290, attendance: 260 },
    { month: "April", events: 8, registrations: 450, attendance: 410 },
    { month: "May", events: 10, registrations: 520, attendance: 480 },
  ];

  const topEvents = [
    { rank: 1, name: "Hackathon 2026", registrations: 450, rating: 4.9, category: "Development" },
    { rank: 2, name: "AI Summit", registrations: 380, rating: 4.8, category: "AI/ML" },
    { rank: 3, name: "Web Dev Workshop", registrations: 320, rating: 4.7, category: "Development" },
    { rank: 4, name: "Data Science Workshop", registrations: 280, rating: 4.6, category: "Data Science" },
    { rank: 5, name: "Cloud Computing", registrations: 250, rating: 4.5, category: "Cloud" },
  ];

  const userGrowth = [
    { category: "Students", total: 1200, active: 950, growth: "+12%" },
    { category: "Faculty", total: 85, active: 78, growth: "+5%" },
    { category: "Admins", total: 5, active: 5, growth: "0%" },
  ];

  const departmentStats = [
    { dept: "Computer Science", students: 450, events: 12, satisfaction: 4.8 },
    { dept: "Data Science", students: 320, events: 8, satisfaction: 4.7 },
    { dept: "AI & ML", students: 280, events: 6, satisfaction: 4.9 },
    { dept: "Cloud Computing", students: 150, events: 4, satisfaction: 4.6 },
  ];

  const renderEventMetrics = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-6">📈 Monthly Event Trends</h3>
        <div className="space-y-4">
          {eventStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-24 font-semibold text-gray-700">{stat.month}</div>
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-2">
                  <span>Events: {stat.events}</span>
                  <span>Registrations: {stat.registrations}</span>
                  <span>Attendance: {stat.attendance}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 flex">
                  <div
                    className="bg-blue-600 rounded-full"
                    style={{ width: `${(stat.registrations / 520) * 100}%` }}
                  ></div>
                  <div
                    className="bg-green-600"
                    style={{ width: `${(stat.attendance / 520) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
          💡 Trend: Events are increasing by 20% monthly with 92% average attendance rate
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-6">🏆 Top Events</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Rank</th>
                <th className="px-6 py-3 text-left font-semibold">Event Name</th>
                <th className="px-6 py-3 text-right font-semibold">Category</th>
                <th className="px-6 py-3 text-right font-semibold">Registrations</th>
                <th className="px-6 py-3 text-right font-semibold">Rating</th>
              </tr>
            </thead>
            <tbody>
              {topEvents.map(event => (
                <tr key={event.rank} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-lg text-purple-600">{event.rank}</td>
                  <td className="px-6 py-4 font-medium">{event.name}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {event.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold">{event.registrations}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-bold">⭐ {event.rating}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderUserMetrics = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {userGrowth.map((user, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">{user.category}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total</span>
                <span className="text-2xl font-bold">{user.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Active</span>
                <span className="text-2xl font-bold text-green-600">{user.active}</span>
              </div>
              <div className="pt-2 border-t">
                <span className="text-gray-600">Growth</span>
                <span className={`block text-2xl font-bold ${user.growth.includes("+") ? "text-green-600" : "text-gray-600"}`}>
                  {user.growth}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-6">📊 Department Wise Statistics</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Department</th>
                <th className="px-6 py-3 text-right font-semibold">Students</th>
                <th className="px-6 py-3 text-right font-semibold">Events Conducted</th>
                <th className="px-6 py-3 text-right font-semibold">Satisfaction Rate</th>
              </tr>
            </thead>
            <tbody>
              {departmentStats.map((dept, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{dept.dept}</td>
                  <td className="px-6 py-4 text-right font-semibold">{dept.students}</td>
                  <td className="px-6 py-4 text-right font-semibold">{dept.events}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-bold text-green-600">⭐ {dept.satisfaction}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderPerformanceMetrics = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4">⏱️ Average Event Duration</h3>
          <div className="text-4xl font-bold text-blue-600 mb-2">4.2 hrs</div>
          <p className="text-gray-600 text-sm">Average event length across all events</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4">📊 Attendance Rate</h3>
          <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
          <p className="text-gray-600 text-sm">Overall attendance across all events</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-6">🎯 Event Performance Indicators</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Completion Rate</span>
              <span className="font-bold">88%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: "88%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Student Satisfaction</span>
              <span className="font-bold">4.7/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-600 h-3 rounded-full" style={{ width: "94%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Certificate Issuance</span>
              <span className="font-bold">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-purple-600 h-3 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">📊 Reports & Analytics</h1>
            <p className="text-gray-600">Comprehensive system analytics and performance metrics</p>
          </div>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map(metric => (
            <button
              key={metric.id}
              onClick={() => setSelectedMetric(metric.id)}
              className={`p-6 rounded-lg shadow-lg transition transform hover:scale-105 ${
                selectedMetric === metric.id
                  ? "bg-slate-700 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="text-3xl mb-2">{metric.icon}</div>
              <p className="font-semibold">{metric.label}</p>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {selectedMetric === "events" && renderEventMetrics()}
          {selectedMetric === "users" && renderUserMetrics()}
          {selectedMetric === "performance" && renderPerformanceMetrics()}
          {selectedMetric === "revenue" && (
            <div className="text-center py-8 text-gray-600">
              <p className="text-lg">Revenue reporting coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminReportsAnalytics;
