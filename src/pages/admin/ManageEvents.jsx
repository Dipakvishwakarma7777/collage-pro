function ManageEvents() {
  return (
    <div className="p-10">
      <div className="flex justify-between mb-5">
        <h1 className="text-4xl font-bold">Manage Events</h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded">
          Add Event
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-5">
        <table className="w-full">
          <thead>
            <tr>
              <th>Event</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default ManageEvents;
