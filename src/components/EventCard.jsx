function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={event.poster}
        alt="event"
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h1 className="text-2xl font-bold mb-2">{event.title}</h1>

        <p className="text-gray-600">{event.description}</p>

        <button className="bg-blue-600 text-white px-5 py-2 rounded mt-4">
          Register
        </button>
      </div>
    </div>
  );
}

export default EventCard;
