import React from "react";

const SideCart = () => {
  return (
    <>
      <div className="flex flex-col border-l w-1/3 bg-white rounded-lg shadow-lg p-4">
        <div className="grid grid-cols-1 gap-2 divide-y">
          <div className="flex items-center justify-between py-3">
            <p className="text-2xl text-gray-800">General Admission</p>
            <p className="text-2xl text-gray-800">$12.99</p>
          </div>
          <div className="flex items-center justify-between py-3">
            <p className="text-2xl text-gray-800">Concession - Popcorn</p>
            <p className="text-2xl text-gray-800">$5.99</p>
          </div>
          <div className="flex items-center justify-between py-3">
            <p className="text-2xl text-gray-800">Concession - Pop</p>
            <p className="text-2xl text-gray-800">$4.99</p>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-4" />
        <div className="flex-grow"></div>
        <div className="flex items-center justify-between py-3">
          <p className="text-xl font-semibold">Total</p>
          <p className="text-xl text-green-600">$23.97</p>
        </div>
        <button className="bg-blue-500 text-white text-2xl py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Checkout
        </button>
      </div>
    </>
  );
};

export { SideCart };
