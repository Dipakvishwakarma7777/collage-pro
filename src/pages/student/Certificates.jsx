import Navbar from "../../components/Navbar";

function Certificates() {
  const certificates = [
    {
      id: 1,
      event: "Hackathon 2026",
      date: "May 15, 2026",
      issueDate: "May 16, 2026",
      credential: "CERT-2026-001",
    },
    {
      id: 2,
      event: "Web Development Workshop",
      date: "April 20, 2026",
      issueDate: "April 21, 2026",
      credential: "CERT-2026-002",
    },
    {
      id: 3,
      event: "AI Summit 2025",
      date: "December 10, 2025",
      issueDate: "December 11, 2025",
      credential: "CERT-2025-045",
    },
  ];

  const downloadCertificate = (id, eventName) => {
    console.log(`Downloading certificate for ${eventName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">My Certificates</h1>
          <p className="text-gray-600">
            Download and share your achievement certificates
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-1">🏆 Total Certificates</h2>
              <p className="text-3xl font-bold text-blue-600">{certificates.length}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Last earned</p>
              <p className="font-semibold">{certificates[0]?.issueDate || "N/A"}</p>
            </div>
          </div>
        </div>

        {certificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="h-40 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center">
                  <div className="text-6xl">🎓</div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{certificate.event}</h3>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold text-gray-700">Earned:</span> {certificate.date}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">Issued:</span> {certificate.issueDate}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">ID:</span> {certificate.credential}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => downloadCertificate(certificate.id, certificate.event)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      📥 Download
                    </button>
                    <button className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                      🔗 Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-4">📜</div>
            <h3 className="text-2xl font-bold mb-2">No Certificates Yet</h3>
            <p className="text-gray-600 mb-6">
              Participate in events and complete them to earn certificates
            </p>
            <a
              href="/events"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Browse Events
            </a>
          </div>
        )}

        <div className="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold mb-4">💡 About Your Certificates</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ All certificates are digitally verified and can be shared</li>
            <li>✓ Each certificate includes a unique credential ID for verification</li>
            <li>✓ Download certificates in PDF format for your portfolio</li>
            <li>✓ Share certificates on LinkedIn and other professional networks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
