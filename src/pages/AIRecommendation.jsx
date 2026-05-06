function AIRecommendation() {
  const recommendations = [
    "AI Workshop",
    "Cyber Security Seminar",
    "Web Development Bootcamp",
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">AI Recommended Events</h1>

      <div className="grid grid-cols-3 gap-5">
        {recommendations.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIRecommendation;
