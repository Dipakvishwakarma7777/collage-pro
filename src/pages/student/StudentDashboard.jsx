import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";

function StudentDashboard() {
  const user = useSelector((state) => state.auth.user);

  const registrations = [
    { id: 1, event: "Hackathon 2026", date: "May 15, 2026", status: "Registered" },
    { id: 2, event: "Web Dev Workshop", date: "May 20, 2026", status: "Registered" },
  ];

  const certificates = [
    { id: 1, event: "Hackathon 2025", date: "Completed" },
    { id: 2, event: "AI Workshop", date: "Completed" },
  ];

  const upcomingEvents = [
    { id: 1, event: "React Masterclass", date: "May 25, 2026" },
    { id: 2, event: "Data Science Summit", date: "June 5, 2026" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.name || "Student"}! 👨‍🎓</h1>
          <p className="text-blue-100">Track your events, certificates, and learning progress</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition">
            <div className="text-3xl font-bold text-blue-600 mb-2">{registrations.length}</div>
            <p className="text-gray-600">Registered Events</p>
            <p className="text-xs text-gray-500 mt-2">Active registrations</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500 hover:shadow-xl transition">
            <div className="text-3xl font-bold text-green-600 mb-2">{certificates.length}</div>
            <p className="text-gray-600">Certificates Earned</p>
            <p className="text-xs text-gray-500 mt-2">Completed & verified</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition">
            <div className="text-3xl font-bold text-purple-600 mb-2">{upcomingEvents.length}</div>
            <p className="text-gray-600">Upcoming Events</p>
            <p className="text-xs text-gray-500 mt-2">Don't miss out</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition">
            <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
            <p className="text-gray-600">Attendance Rate</p>
            <p className="text-xs text-gray-500 mt-2">Keep it up!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">📋 My Registrations</h2>
                <p className="text-sm text-gray-600 mt-1">Events you're signed up for</p>
              </div>
              <Link to="/events" className="text-blue-600 hover:text-blue-700 font-semibold">
                Browse More →
              </Link>
            </div>
            {registrations.length > 0 ? (
              <div className="space-y-4">
                {registrations.map((reg) => (
                  <div key={reg.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-blue-50 transition">
                    <div>
                      <h3 className="font-semibold text-lg">{reg.event}</h3>
                      <p className="text-sm text-gray-600">📅 {reg.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {reg.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No registrations yet</p>
            )}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">🏆 My Certificates</h2>
                <p className="text-sm text-gray-600 mt-1">Your achievements & credentials</p>
              </div>
              <Link to="/certificates" className="text-blue-600 hover:text-blue-700 font-semibold">
                View All →
              </Link>
            </div>
            {certificates.length > 0 ? (
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div key={cert.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-green-50 transition">
                    <div>
                      <h3 className="font-semibold text-lg">{cert.event}</h3>
                      <p className="text-sm text-gray-600">✓ {cert.date}</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No certificates yet</p>
            )}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">🎯 Upcoming Events</h2>
              <p className="text-sm text-gray-600 mt-1">Events happening soon</p>
            </div>
            <Link to="/events" className="text-blue-600 hover:text-blue-700 font-semibold">
              See All Events →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-6 border rounded-lg hover:shadow-lg transition bg-gradient-to-br from-blue-50 to-transparent">
                <h3 className="font-semibold text-lg mb-2">{event.event}</h3>
                <p className="text-sm text-gray-600 mb-4">📅 {event.date}</p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/payment" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform">
            <h3 className="text-2xl font-bold mb-2">💳 Payments</h3>
            <p className="text-blue-100">View and manage your event payments</p>
            <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded font-semibold hover:bg-blue-50">
              Manage Payments →
            </button>
          </Link>
          <Link to="/attendance" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform">
            <h3 className="text-2xl font-bold mb-2">✓ Mark Attendance</h3>
            <p className="text-purple-100">Check in to events using QR code</p>
            <button className="mt-4 px-4 py-2 bg-white text-purple-600 rounded font-semibold hover:bg-purple-50">
              Scan QR Code →
            </button>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/student-profile" className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform">
            <h3 className="text-2xl font-bold mb-2">📋 My Profile</h3>
            <p className="text-green-100">View your academic progress and achievements</p>
            <button className="mt-4 px-4 py-2 bg-white text-green-600 rounded font-semibold hover:bg-green-50">
              View Profile →
            </button>
          </Link>
          <Link to="/student-events" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform">
            <h3 className="text-2xl font-bold mb-2">🎯 Browse Events</h3>
            <p className="text-orange-100">Discover new events and register for them</p>
            <button className="mt-4 px-4 py-2 bg-white text-orange-600 rounded font-semibold hover:bg-orange-50">
              Explore Events →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
