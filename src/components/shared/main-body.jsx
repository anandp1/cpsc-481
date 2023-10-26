/* eslint-disable @next/next/no-img-element */
import { Navigation } from "./navigation";
import { SideCart } from "./side-cart";

const MainBody = ({ children }) => {
  return (
    <div className="bg-gray-200 bg-opacity-80">
      <div className="flex flex-row min-h-screen max-h-screen">
        <div className="flex flex-col w-3/4">
          <div className="flex flex-row">
            <div className="w-1/2 text-center bg-gray-300 py-2 cursor-pointer rounded-tl-md">
              <p className="text-xl font-bold text-gray-700">Concessions</p>
            </div>
            <div className="w-1/2 text-center bg-gray-200 py-2 cursor-pointer rounded-tr-md">
              <p className="text-xl font-bold text-gray-700">Tickets</p>
            </div>
          </div>
          {children}
          <Navigation />
        </div>
        <SideCart />
      </div>
    </div>
  );
};

export default MainBody;
