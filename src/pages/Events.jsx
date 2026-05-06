import EventCard from "../components/EventCard";

function Events() {
  const events = [
    {
      id: 1,
      title: "Hackathon",
      description: "24 hour coding challenge",
      poster: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
  ];

  return (
    <div className="p-10 grid grid-cols-3 gap-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default Events;
