function BookConsultation() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Book a Consultation</h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Doctor
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>Dr. Ayurveda Specialist 1</option>
              <option>Dr. Ayurveda Specialist 2</option>
              <option>Dr. Ayurveda Specialist 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Time
            </label>
            <input
              type="time"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason for Consultation
            </label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Describe your health concerns..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#3A643B] text-white py-3 rounded-md hover:bg-[#2d4f2e] transition-colors"
          >
            Book Consultation
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookConsultation;