import Navbar from "../../components/Navbar";
import { useState } from "react";

function FacultyEventManagement() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    capacity: "",
    category: "Development"
  });

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Web Development Workshop",
      date: "May 25, 2026",
      time: "10:00 AM",
      capacity: 500,
      registered: 450,
      attendance: 420,
      status: "upcoming",
      category: "Development",
      rating: 4.8
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      date: "May 27, 2026",
      time: "2:00 PM",
      capacity: 300,
      registered: 280,
      attendance: 260,
      status: "upcoming",
      category: "Development",
      rating: 4.7
    },
    {
      id: 3,
      title: "React Workshop",
      date: "May 10, 2026",
      time: "11:00 AM",
      capacity: 200,
      registered: 195,
      attendance: 185,
      status: "completed",
      category: "Development",
      rating: 4.9
    }
  ]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      id: events.length + 1,
      ...formData,
      registered: 0,
      attendance: 0,
      status: "upcoming",
      rating: 0
    };
    setEvents([...events, newEvent]);
    setFormData({ title: "", description: "", date: "", time: "", capacity: "", category: "Development" });
    setShowModal(false);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(e => e.id !== id));
  };

  const filteredEvents = events.filter(e => activeTab === "all" || e.status === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">📋 Event Management</h1>
            <p className="text-gray-600">Create, manage, and track your events</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            + Create Event
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6">
              <h2 className="text-2xl font-bold mb-6">Create New Event</h2>
              <form onSubmit={handleAddEvent} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Event Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="e.g., Web Development Workshop"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Event description"
                    rows="3"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Time</label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Capacity</label>
                    <input
                      type="number"
                      required
                      value={formData.capacity}
                      onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      placeholder="Max attendees"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    >
                      <option>Development</option>
                      <option>Data Science</option>
                      <option>AI/ML</option>
                      <option>Cloud</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Create Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {[
            { id: "all", label: "All Events" },
            { id: "upcoming", label: "Upcoming" },
            { id: "completed", label: "Completed" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  <p className="text-gray-600 mt-1">📅 {event.date} | ⏰ {event.time}</p>
                </div>
                <div className="text-right">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    event.status === "upcoming"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}>
                    {event.status === "upcoming" ? "📅 Upcoming" : "✓ Completed"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Capacity</p>
                  <p className="text-2xl font-bold text-blue-600">{event.capacity}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Registered</p>
                  <p className="text-2xl font-bold text-green-600">{event.registered}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="text-2xl font-bold text-purple-600">{event.attendance}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-yellow-600">⭐ {event.rating}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Attendance Rate</span>
                  <span className="font-bold">{Math.round((event.attendance/event.registered)*100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${(event.attendance/event.registered)*100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Edit
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
                  View Details
                </button>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No events found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FacultyEventManagement;
