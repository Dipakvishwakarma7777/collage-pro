import Navbar from "../../components/Navbar";
import { useState } from "react";

function StudentEvents() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      category: "Development",
      date: "May 25, 2026",
      time: "10:00 AM - 5:00 PM",
      faculty: "Dr. Smith",
      registrations: 450,
      status: "registered",
      rating: 4.8,
      capacity: 500,
      description:
        "Comprehensive web development course covering HTML, CSS, JavaScript, React, and Node.js",
      tags: ["Web", "Development", "Intermediate"],
    },
    {
      id: 2,
      title: "AI & Machine Learning Summit",
      category: "AI/ML",
      date: "June 5, 2026",
      time: "9:00 AM - 4:00 PM",
      faculty: "Prof. Johnson",
      registrations: 280,
      status: "available",
      rating: 4.9,
      capacity: 300,
      description:
        "Advanced AI and Machine Learning concepts with hands-on projects",
      tags: ["AI", "ML", "Advanced"],
    },
    {
      id: 3,
      title: "Cloud Computing Workshop",
      category: "Cloud",
      date: "June 10, 2026",
      time: "2:00 PM - 6:00 PM",
      faculty: "Dr. Williams",
      registrations: 320,
      status: "available",
      rating: 4.7,
      capacity: 400,
      description: "AWS and Azure cloud platform fundamentals",
      tags: ["Cloud", "AWS", "Azure"],
    },
    {
      id: 4,
      title: "Python for Data Science",
      category: "Data Science",
      date: "May 20, 2026",
      time: "3:00 PM - 5:00 PM",
      faculty: "Dr. Brown",
      registrations: 200,
      status: "completed",
      rating: 4.6,
      capacity: 250,
      description:
        "Learn Python programming with focus on data analysis and visualization",
      tags: ["Python", "Data", "Beginner"],
    },
  ];

  const categories = [
    { id: "all", label: "All Events" },
    { id: "registered", label: "My Events" },
    { id: "available", label: "Available" },
    { id: "completed", label: "Completed" },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesFilter =
      activeFilter === "all" || event.status === activeFilter;
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    const colors = {
      registered: "bg-green-100 text-green-800",
      available: "bg-blue-100 text-blue-800",
      completed: "bg-gray-100 text-gray-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getStatusLabel = (status) => {
    const labels = {
      registered: "✓ Registered",
      available: "Available",
      completed: "Completed",
    };
    return labels[status] || status;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">🎯 Browse Events</h1>
          <p className="text-gray-600">
            Discover and register for exciting events
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                activeFilter === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">{event.title}</h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}
                  >
                    {getStatusLabel(event.status)}
                  </span>
                </div>
                <p className="text-blue-100">{event.description}</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">📅 Date</p>
                    <p className="font-semibold">{event.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">⏰ Time</p>
                    <p className="font-semibold">{event.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">👨‍🏫 Faculty</p>
                    <p className="font-semibold">{event.faculty}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">👥 Registrations</p>
                    <p className="font-semibold">
                      {event.registrations}/{event.capacity}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Capacity</span>
                    <span className="text-sm">
                      {Math.round((event.registrations / event.capacity) * 100)}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${(event.registrations / event.capacity) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span>⭐ {event.rating}</span>
                    <span className="text-sm text-gray-600">
                      ({event.registrations} reviews)
                    </span>
                  </div>
                  <button
                    className={`px-6 py-2 rounded font-semibold transition ${
                      event.status === "registered"
                        ? "bg-green-100 text-green-700 cursor-default"
                        : event.status === "completed"
                          ? "bg-gray-100 text-gray-700 cursor-default"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {event.status === "registered"
                      ? "✓ Registered"
                      : event.status === "completed"
                        ? "Completed"
                        : "Register"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No events found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentEvents;
