import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { useState } from "react";

function StudentProfile() {
  const user = useSelector((state) => state.auth.user);
  const [activeTab, setActiveTab] = useState("overview");

  const studentData = {
    rollNumber: "MCA001",
    semester: "2nd Semester",
    gpa: "3.8",
    totalCredits: "24",
    completedEvents: 12,
    upcomingEvents: 5,
    certificates: 8,
  };

  const courseProgress = [
    { name: "Web Development", progress: 85, status: "In Progress" },
    { name: "Data Science", progress: 70, status: "In Progress" },
    { name: "AI & ML", progress: 100, status: "Completed" },
  ];

  const achievements = [
    { id: 1, title: "Event Champion", badge: "🏆", description: "Won Hackathon 2026" },
    { id: 2, title: "Active Participant", badge: "⭐", description: "Attended 10+ events" },
    { id: 3, title: "Quick Learner", badge: "🚀", description: "Completed 5 certificates" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{user?.name || "Student"}</h1>
              <p className="text-blue-100">Roll: {studentData.rollNumber} | Semester: {studentData.semester}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">{studentData.gpa}</div>
              <p className="text-blue-100">Current GPA</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <div className="text-3xl font-bold text-blue-600">{studentData.completedEvents}</div>
            <p className="text-gray-600 mt-2">Events Attended</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-600">{studentData.upcomingEvents}</div>
            <p className="text-gray-600 mt-2">Upcoming Events</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-600">{studentData.certificates}</div>
            <p className="text-gray-600 mt-2">Certificates Earned</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
            <div className="text-3xl font-bold text-yellow-600">{studentData.totalCredits}</div>
            <p className="text-gray-600 mt-2">Total Credits</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">📚 Learning Progress</h2>
            <div className="space-y-6">
              {courseProgress.map((course, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{course.name}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      course.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {course.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all ${
                        course.progress >= 80 ? 'bg-green-600' : 'bg-blue-600'
                      }`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{course.progress}% Complete</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">🏅 Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="p-4 border rounded-lg hover:bg-blue-50 transition">
                  <div className="text-3xl mb-2">{achievement.badge}</div>
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
