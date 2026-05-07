import Navbar from "../../components/Navbar";
import { useState } from "react";

function AdminUserManagement() {
  const [activeTab, setActiveTab] = useState("students");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [users, setUsers] = useState({
    students: [
      { id: 1, name: "Rajesh Kumar", email: "rajesh@college.edu", rollNo: "MCA001", status: "active", joinDate: "2024-01-15" },
      { id: 2, name: "Priya Singh", email: "priya@college.edu", rollNo: "MCA002", status: "active", joinDate: "2024-01-15" },
      { id: 3, name: "Amit Patel", email: "amit@college.edu", rollNo: "MCA003", status: "inactive", joinDate: "2024-01-15" },
      { id: 4, name: "Neha Sharma", email: "neha@college.edu", rollNo: "MCA004", status: "active", joinDate: "2024-02-01" },
    ],
    faculty: [
      { id: 1, name: "Dr. Smith", email: "smith@college.edu", department: "Computer Science", status: "active", joinDate: "2023-06-01" },
      { id: 2, name: "Prof. Johnson", email: "johnson@college.edu", department: "Data Science", status: "active", joinDate: "2023-06-01" },
      { id: 3, name: "Dr. Williams", email: "williams@college.edu", department: "Computer Science", status: "inactive", joinDate: "2023-06-01" },
    ]
  });

  const handleDelete = (id) => {
    const key = activeTab === "students" ? "students" : "faculty";
    setUsers({
      ...users,
      [key]: users[key].filter(u => u.id !== id)
    });
  };

  const handleStatusToggle = (id) => {
    const key = activeTab === "students" ? "students" : "faculty";
    setUsers({
      ...users,
      [key]: users[key].map(u =>
        u.id === id ? { ...u, status: u.status === "active" ? "inactive" : "active" } : u
      )
    });
  };

  const currentUsers = activeTab === "students" ? users.students : users.faculty;
  const filteredUsers = currentUsers.filter(u =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: "Total Students", value: users.students.length, icon: "👨‍🎓", color: "blue" },
    { label: "Active Students", value: users.students.filter(u => u.status === "active").length, icon: "✓", color: "green" },
    { label: "Total Faculty", value: users.faculty.length, icon: "👨‍🏫", color: "purple" },
    { label: "Active Faculty", value: users.faculty.filter(u => u.status === "active").length, icon: "✓", color: "green" },
  ];

  const colorMap = {
    blue: "border-blue-500 text-blue-600 bg-blue-50",
    green: "border-green-500 text-green-600 bg-green-50",
    purple: "border-purple-500 text-purple-600 bg-purple-50",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">👥 User Management</h1>
            <p className="text-gray-600">Manage students, faculty, and user permissions</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-800 transition"
          >
            + Add User
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className={`p-6 rounded-lg shadow-lg border-l-4 ${colorMap[stat.color]}`}>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <div className="text-3xl font-bold mt-2">{stat.value}</div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6">
              <h2 className="text-2xl font-bold mb-6">Add New User</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-slate-600"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-slate-600"
                    placeholder="user@college.edu"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">User Type</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-slate-600">
                    <option>Student</option>
                    <option>Faculty</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700"
                  >
                    Add User
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-3">
              <button
                onClick={() => setActiveTab("students")}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  activeTab === "students"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Students ({users.students.length})
              </button>
              <button
                onClick={() => setActiveTab("faculty")}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  activeTab === "faculty"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Faculty ({users.faculty.length})
              </button>
            </div>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Name</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Email</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    {activeTab === "students" ? "Roll No" : "Department"}
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Join Date</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-center font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium">{user.name}</td>
                    <td className="px-6 py-4 text-gray-600">{user.email}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {activeTab === "students" ? user.rollNo : user.department}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.joinDate}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}>
                        {user.status === "active" ? "✓ Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <button
                        onClick={() => handleStatusToggle(user.id)}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition text-sm"
                      >
                        Toggle Status
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No users found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminUserManagement;
