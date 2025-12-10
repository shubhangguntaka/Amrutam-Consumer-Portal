import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {[1, 2].map((item) => (
            <div key={item} className="flex items-center gap-4 pb-4 border-b">
              <div className="w-20 h-20 bg-gray-200 rounded"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Product {item}</h3>
                <p className="text-gray-600 text-sm">Quantity: 1</p>
              </div>
              <span className="font-bold text-[#3A643B]">₹999</span>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold text-[#3A643B]">₹1998</span>
          </div>
          <Link
            to="/checkout"
            className="block w-full bg-[#3A643B] text-white text-center py-3 rounded-md hover:bg-[#2d4f2e] transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;