function AdminDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2>Total Events</h2>
          <h1 className="text-5xl font-bold">25</h1>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2>Total Students</h2>
          <h1 className="text-5xl font-bold">1200</h1>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
