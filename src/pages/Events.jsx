import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      id: 1,
      title: "Hackathon 2026",
      description: "24 hour coding challenge",
      category: "hackathon",
      date: "May 15, 2026",
      registrations: 450,
      poster: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
    {
      id: 2,
      title: "Web Development Workshop",
      description: "Learn modern web development with React and Node.js",
      category: "workshop",
      date: "May 20, 2026",
      registrations: 320,
      poster: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
    {
      id: 3,
      title: "AI Summit 2026",
      description: "Explore artificial intelligence and machine learning",
      category: "conference",
      date: "May 25, 2026",
      registrations: 280,
      poster: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build iOS and Android apps",
      category: "workshop",
      date: "June 5, 2026",
      registrations: 210,
      poster: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: 5,
      title: "Cloud Computing Bootcamp",
      description: "Master AWS, Azure, and GCP",
      category: "bootcamp",
      date: "June 10, 2026",
      registrations: 180,
      poster: "https://images.unsplash.com/photo-1460925895917-adf4078cead0",
    },
    {
      id: 6,
      title: "Cybersecurity Workshop",
      description: "Learn ethical hacking and security best practices",
      category: "workshop",
      date: "June 15, 2026",
      registrations: 150,
      poster: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0",
    },
  ];

  const categories = [
    { id: "all", name: "All Events" },
    { id: "workshop", name: "Workshops" },
    { id: "hackathon", name: "Hackathons" },
    { id: "conference", name: "Conferences" },
    { id: "bootcamp", name: "Bootcamps" },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-gray-600">Discover and register for amazing events</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
          />

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"} Found
          </h2>
          <select className="px-4 py-2 border rounded-lg bg-white">
            <option>Sort by: Latest</option>
            <option>Sort by: Most Popular</option>
            <option>Sort by: Upcoming</option>
          </select>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Link key={event.id} to={`/events/${event.id}`}>
                <EventCard event={event} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No Events Found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}

        <div className="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold mb-4">📢 Stay Updated</h3>
          <p className="text-gray-700 mb-4">
            Subscribe to our newsletter to get notified about new events
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
