/* eslint-disable @next/next/no-img-element */
import { Navigation } from "./navigation";
import { SideCart } from "./side-cart";

const MainBody = ({ children }) => {
  return (
    <div className="bg-slate-800">
      <div className="pl-6 flex flex-row min-h-screen max-h-screen">
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
