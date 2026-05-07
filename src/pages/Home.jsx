import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-blue-700 mb-6">
              MCA Event Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover, register, and manage workshops and hackathons. Connect with peers, earn certificates, and grow your skills.
            </p>
            <div className="flex gap-4">
              <Link
                to="/events"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Explore Events
              </Link>
              <Link
                to="/register"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Free</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-3">Learn New Skills</h3>
            <p className="text-gray-600">Attend workshops and hackathons hosted by industry experts.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3">Network & Connect</h3>
            <p className="text-gray-600">Meet peers, mentors, and professionals in your field.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-3">Earn Certificates</h3>
            <p className="text-gray-600">Get recognized for your participation and achievements.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
