function Checkout() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Pincode"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹1998</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>₹50</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total:</span>
              <span className="text-[#3A643B]">₹2048</span>
            </div>
          </div>
          <button className="w-full bg-[#3A643B] text-white py-3 rounded-md hover:bg-[#2d4f2e] transition-colors">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;