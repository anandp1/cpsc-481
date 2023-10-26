import React from "react";

const SideCart = () => {
  return (
    <>
      <div className="flex flex-col border-l w-full">
        <div className="grid grid-cols-1 gap-2 divide-y pt-6">
          <p className="text-2xl text-gray-600 py-3 text-center">
            General Admission
          </p>
          <p className="text-2xl text-gray-600 py-3 text-center">
            Concession - Popcorn
          </p>
          <p className="text-2xl text-gray-600 py-3 text-center">
            Concession - Pop
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-auto">
          <hr />
          <span className="flex flex-row px-3">
            <p>Total</p>
            <p className="ml-auto">$34.99</p>
          </span>
          <hr />
          <p className="text-center py-10">Checkout</p>
        </div>
      </div>
    </>
  );
};

export { SideCart };
