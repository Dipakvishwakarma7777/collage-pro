import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MCA Event
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/events">Events</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/chat">Community</Link>
          <Link to="/ai-recommendation">AI Suggestion</Link>
        </div>

        <div className="flex gap-3">
          <Link to="/login" className="px-4 py-2 border rounded-lg">
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
