import React from "react";
import { IoClose } from "react-icons/io5";

function Slidepopup({ Slidepopupvalue, Slidepopup,productsInCart}) {
 
  const handleRemoveProduct = (productId) => {
    console.log("Remove product with ID:", productId);
    // Logic to remove the product from the cart (this can be updated with actual state management)
  };

  return (
    <div>
      {/* Black Overlay Box */}
      <div
        onClick={Slidepopup}
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          Slidepopupvalue ? "opacity-100 visible z-30" : "opacity-0 invisible"
        }`}
      >
        {/* White Slide-In Box */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 right-0 w-96 h-full z-40 bg-white shadow-lg transition-transform duration-500 ${
            Slidepopupvalue ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Icon */}
          <div className="p-4 flex justify-end">
            <IoClose
              onClick={Slidepopup}
              fontSize={24}
              className="cursor-pointer text-gray-500 hover:text-black"
            />
          </div>

          

          {productsInCart &&  <div className="p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

            {/* Product List */}
            {productsInCart.length > 0 ? (
              productsInCart.map((product) => (
                <div
                  key={product.id} // Use the product id for the key
                  className="flex items-center justify-between p-3 mb-4 border-b"
                >
                  <div className="flex items-center">
                    <img
                      src={"images/"+product.image} // Ensure this path is correct or dynamic
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
                      <p className="text-sm text-gray-500">{product.offer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-[#ff5200]">
                      ₹{product.price * product.quantity}
                    </p>
                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="text-sm text-red-500 hover:text-red-700 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Your cart is empty</p>
            )}

            {/* Total Price */}
            <div className="mt-4">
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span className="text-[#ff5200]">
                  ₹{productsInCart.reduce((total, product) => total + product.price * product.quantity, 0)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            {productsInCart.length > 0 && (
              <div className="mt-6">
                <button className="w-full py-2 bg-[#ff5200] text-white rounded-lg hover:bg-[#e04d00] transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>}
         

        </div>
      </div>
    </div>
  );
}

export default Slidepopup;
