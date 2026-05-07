import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function EventDetails() {
  const { id } = useParams();

  const eventData = {
    id: id || 1,
    title: "Hackathon 2026",
    category: "hackathon",
    date: "May 15, 2026",
    time: "9:00 AM - 9:00 PM",
    location: "Engineering Block, Building A",
    registrations: 450,
    maxRegistrations: 500,
    poster: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    description:
      "Join us for an exciting 24-hour coding challenge where you can showcase your skills, learn from peers, and build something amazing!",
    details: [
      "Compete with fellow developers",
      "Win amazing prizes worth ₹1,00,000",
      "Mentorship from industry experts",
      "Networking opportunities",
      "Food and refreshments provided",
    ],
    schedule: [
      { time: "9:00 AM", event: "Registration & Breakfast" },
      { time: "10:00 AM", event: "Opening Ceremony" },
      { time: "11:00 AM", event: "Coding Challenge Begins" },
      { time: "1:00 PM", event: "Lunch Break" },
      { time: "6:00 PM", event: "Checkpoint 1 - Demo Review" },
      { time: "9:00 PM", event: "Challenge Ends" },
      { time: "9:30 PM", event: "Judging & Awards" },
    ],
    organizer: "MCA Department",
    organizerEmail: "events@mca.college.edu",
    registered: true,
    judges: ["Dr. John Smith", "Ms. Jane Doe", "Mr. Tech Lead"],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={eventData.poster}
            alt={eventData.title}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-3">
                {eventData.category.toUpperCase()}
              </div>
              <h1 className="text-4xl font-bold mb-3">{eventData.title}</h1>
              <p className="text-gray-600 text-lg">{eventData.description}</p>
            </div>
            <button
              className={`px-8 py-3 rounded-lg font-bold transition ${
                eventData.registered
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {eventData.registered ? "✓ Registered" : "Register Now"}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-gray-600 text-sm">📅 Date</p>
              <p className="font-semibold">{eventData.date}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">⏰ Time</p>
              <p className="font-semibold">{eventData.time}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">📍 Location</p>
              <p className="font-semibold">{eventData.location}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">👥 Registrations</p>
              <p className="font-semibold">
                {eventData.registrations}/{eventData.maxRegistrations}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
              <ul className="space-y-3">
                {eventData.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Schedule</h2>
              <div className="space-y-3">
                {eventData.schedule.map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-3 border-b last:border-0">
                    <div className="font-bold text-blue-600 min-w-24">{item.time}</div>
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4">Organizer</h3>
              <p className="font-semibold mb-2">{eventData.organizer}</p>
              <p className="text-gray-600 text-sm mb-6">{eventData.organizerEmail}</p>

              <h3 className="text-xl font-bold mb-4">Judges</h3>
              <ul className="space-y-2 mb-6">
                {eventData.judges.map((judge, idx) => (
                  <li key={idx} className="text-gray-700">
                    👤 {judge}
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Spots available:</strong> {eventData.maxRegistrations - eventData.registrations}
                </p>
                <p className="text-xs text-gray-600">
                  {Math.round((eventData.registrations / eventData.maxRegistrations) * 100)}% full
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${(eventData.registrations / eventData.maxRegistrations) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
