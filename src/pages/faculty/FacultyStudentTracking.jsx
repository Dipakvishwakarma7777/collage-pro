import Navbar from "../../components/Navbar";
import { useState } from "react";

function FacultyStudentTracking() {
  const [selectedEvent, setSelectedEvent] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    { id: 1, name: "Web Development Workshop", date: "May 25, 2026", registrations: 450 },
    { id: 2, name: "Advanced JavaScript", date: "May 27, 2026", registrations: 280 },
    { id: 3, name: "React Workshop", date: "May 10, 2026", registrations: 195 },
  ];

  const studentData = {
    1: [
      { id: 1, name: "Rajesh Kumar", email: "rajesh@college.edu", status: "present", attendance: 92, performance: "Excellent" },
      { id: 2, name: "Priya Singh", email: "priya@college.edu", status: "present", attendance: 88, performance: "Very Good" },
      { id: 3, name: "Amit Patel", email: "amit@college.edu", status: "absent", attendance: 65, performance: "Good" },
      { id: 4, name: "Neha Sharma", email: "neha@college.edu", status: "present", attendance: 95, performance: "Excellent" },
      { id: 5, name: "Vikram Singh", email: "vikram@college.edu", status: "present", attendance: 78, performance: "Good" },
    ],
    2: [
      { id: 1, name: "Rahul Kumar", email: "rahul@college.edu", status: "present", attendance: 85, performance: "Good" },
      { id: 2, name: "Divya Verma", email: "divya@college.edu", status: "present", attendance: 92, performance: "Excellent" },
      { id: 3, name: "Suresh Patel", email: "suresh@college.edu", status: "absent", attendance: 60, performance: "Fair" },
    ],
    3: [
      { id: 1, name: "Maya Singh", email: "maya@college.edu", status: "present", attendance: 100, performance: "Excellent" },
      { id: 2, name: "Arjun Kumar", email: "arjun@college.edu", status: "present", attendance: 95, performance: "Excellent" },
    ]
  };

  const selectedEventData = events.find(e => e.id === selectedEvent);
  const students = studentData[selectedEvent] || [];
  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalEnrolled: students.length,
    attended: students.filter(s => s.status === "present").length,
    absent: students.filter(s => s.status === "absent").length,
    avgPerformance: "88%"
  };

  const getPerformanceColor = (performance) => {
    const colors = {
      "Excellent": "bg-green-100 text-green-800",
      "Very Good": "bg-blue-100 text-blue-800",
      "Good": "bg-yellow-100 text-yellow-800",
      "Fair": "bg-orange-100 text-orange-800"
    };
    return colors[performance] || "bg-gray-100 text-gray-800";
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 90) return "text-green-600";
    if (attendance >= 80) return "text-blue-600";
    if (attendance >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">👥 Student Tracking</h1>
          <p className="text-gray-600">Monitor student progress, attendance, and performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <div className="text-3xl font-bold text-blue-600">{stats.totalEnrolled}</div>
            <p className="text-gray-600 mt-2">Total Enrolled</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-600">{stats.attended}</div>
            <p className="text-gray-600 mt-2">Attended</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
            <div className="text-3xl font-bold text-red-600">{stats.absent}</div>
            <p className="text-gray-600 mt-2">Absent</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-600">{stats.avgPerformance}</div>
            <p className="text-gray-600 mt-2">Avg Performance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">📋 My Events</h3>
            <div className="space-y-2">
              {events.map(event => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition ${
                    selectedEvent === event.id
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <p className="font-medium">{event.name}</p>
                  <p className="text-sm mt-1">📅 {event.date}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">{selectedEventData?.name}</h2>
                <p className="text-gray-600 mt-1">📅 {selectedEventData?.date}</p>
              </div>
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-64"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Student Name</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Email</th>
                    <th className="px-6 py-3 text-center font-semibold text-gray-700">Attendance</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Performance</th>
                    <th className="px-6 py-3 text-center font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map(student => (
                    <tr key={student.id} className="border-b hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-medium">{student.name}</td>
                      <td className="px-6 py-4 text-gray-600">{student.email}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                student.attendance >= 90 ? 'bg-green-600' : 'bg-yellow-600'
                              }`}
                              style={{ width: `${student.attendance}%` }}
                            ></div>
                          </div>
                          <span className={`font-bold w-10 text-right ${getAttendanceColor(student.attendance)}`}>
                            {student.attendance}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          student.status === "present"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}>
                          {student.status === "present" ? "✓ Present" : "Absent"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPerformanceColor(student.performance)}`}>
                          {student.performance}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center space-x-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm">
                          View Details
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm">
                          Message
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredStudents.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">No students found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyStudentTracking;
