import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">MCA EventHub</h1>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
