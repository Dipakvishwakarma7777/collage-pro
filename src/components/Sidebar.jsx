import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-10">MCA Hub</h1>

      <div className="flex flex-col gap-5">
        <Link to="/admin/dashboard">Dashboard</Link>

        <Link to="/events">Events</Link>

        <Link to="/attendance">Attendance</Link>

        <Link to="/calendar">Calendar</Link>

        <Link to="/chat">Chat</Link>

        <Link to="/certificates">Certificates</Link>
      </div>
    </div>
  );
}

export default Sidebar;
