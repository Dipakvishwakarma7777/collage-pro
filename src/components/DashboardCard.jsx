function DashboardCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-3">{title}</h2>

      <h1 className="text-5xl font-bold text-blue-700">{value}</h1>
    </div>
  );
}

export default DashboardCard;
