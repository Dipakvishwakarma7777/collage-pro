function Certificates() {
  const certificates = [
    {
      id: 1,
      event: "Hackathon 2026",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">Certificates</h1>

      <div className="grid grid-cols-3 gap-5">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-white p-5 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-3">{certificate.event}</h2>

            <button className="bg-blue-600 text-white px-5 py-2 rounded">
              Download Certificate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
