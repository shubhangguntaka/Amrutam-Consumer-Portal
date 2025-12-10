function Profile() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <div className="flex items-center gap-6 mb-6 pb-6 border-b">
          <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              defaultValue="+91 9876543210"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              defaultValue="123 Main Street, City, State 123456"
            ></textarea>
          </div>
          <button className="w-full bg-[#3A643B] text-white py-3 rounded-md hover:bg-[#2d4f2e] transition-colors">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;