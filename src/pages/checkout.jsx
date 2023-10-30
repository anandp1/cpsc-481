import { useState } from "react";

import Layout from "../components/shared/layout";


const Button = ({ children, onClick, className }) => {
  return (
    <button className={"bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 " + className} onClick={onClick}>
      {children}
    </button>
  );
}

export default function Checkout() {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [isLoyaltyModalOpen, setIsLoyaltyModalOpen] = useState(false);

  const handleCouponClose = () => setIsCouponModalOpen(false);
  const handleLoyaltyClose = () => setIsLoyaltyModalOpen(false);

  return (
    <Layout>
      <div className="grid grid-cols-3 grid-rows-6 gap-4 place-items-stretch grid-flow-col w-full h-full p-4">
        <div className="contents">
          <div className="row-span-3 rounded-lg bg-gray-200 p-4 outline outline-2 outline-gray-400">
            <p>Member points: 143</p>
          </div>
          <div className="row-span-3 flex w-full">
            <Button className="grow">Exact</Button>
            <Button className="grow">Split</Button>
            <Button className="grow">50/50</Button>
          </div>
        </div>
        <div className="contents">
          <Button>Credit card</Button>
          <Button>Debit card</Button>
          <Button>Cash</Button>
          <Button>Gift card</Button>
          <div className="row-span-2 flex flex-col rounded-lg outline outline-2 outline-gray-400 outline-offset-8">
            <Button className="grow mb-2" onClick={() => setIsCouponModalOpen(true)}>Coupon</Button>
            <Button className="grow mt-2" onClick={() => setIsLoyaltyModalOpen(true)}>Loyalty</Button>
          </div>

        </div>
        <div className="contents">
          {[5, 10, 20, 50, 100].map((bill) => (
            <Button key={bill}>${bill}</Button>
          ))}
        </div>
      </div>
    </Layout>
  );
}

