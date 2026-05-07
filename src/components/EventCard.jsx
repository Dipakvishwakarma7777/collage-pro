function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
      <div className="relative">
        <img
          src={event.poster}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        {event.category && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
            {event.category.toUpperCase()}
          </span>
        )}
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold mb-2 line-clamp-2">{event.title}</h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

        <div className="space-y-2 text-sm text-gray-600 mb-4">
          {event.date && (
            <p className="flex items-center gap-2">
              <span>📅</span> {event.date}
            </p>
          )}
          {event.registrations !== undefined && (
            <p className="flex items-center gap-2">
              <span>👥</span> {event.registrations} registered
            </p>
          )}
        </div>

        <button className="w-full bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;
