function ConsultationsHistory() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Bookings</h1>
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Dr. Ayurveda Specialist {item}</h3>
                <p className="text-gray-600 text-sm mt-1">Date: 15 Dec 2025</p>
                <p className="text-gray-600 text-sm">Time: 10:00 AM</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Confirmed
              </span>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-gray-700">Reason: General wellness checkup</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsultationsHistory;