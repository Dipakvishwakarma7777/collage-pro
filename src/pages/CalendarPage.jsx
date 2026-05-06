import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">Event Calendar</h1>

      <Calendar />
    </div>
  );
}

export default CalendarPage;
