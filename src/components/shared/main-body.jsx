/* eslint-disable @next/next/no-img-element */
import { Navigation } from "./navigation";
import { SideCart } from "./side-cart";

const MainBody = ({ children }) => {
  return (
    <div className="bg-gray-200 bg-opacity-80">
      <div className="flex flex-row min-h-screen max-h-screen">
        <div className="flex flex-col w-3/4">
          {children}
          <Navigation />
        </div>

        <SideCart />
      </div>
    </div>
  );
};

export default MainBody;
