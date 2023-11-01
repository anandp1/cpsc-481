import { useState } from "react";

import Layout from "../components/shared/layout";
import CouponModal from "../components/modal/coupon-modal";

import {
  CreditCardIcon as DebitCardIcon,
  BanknotesIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline"
import { CreditCardIcon } from "@heroicons/react/24/solid"
import { Loyalty, CardGiftcard } from "@mui/icons-material";


const Button = ({ children, onClick, className }) => {
  return (
    <button className={"rounded-lg shadow-md text-lg flex place-content-center place-items-center " + className} onClick={onClick}>
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
    <Layout isCheckout={true}>
      {isCouponModalOpen && (
        <CouponModal
          isCouponModalOpen={isCouponModalOpen}
          handleClose={handleCouponClose}
        />
      )}
      <div className="grid grid-cols-3 grid-rows-6 gap-8 place-items-stretch grid-flow-col w-full h-full p-8">
        <div className="contents">
          <div className="row-span-3 relative rounded-lg text-lg bg-gray-200/50 p-4 outline outline-2 outline-gray-400/70 outline-offset-8">
            <span className="absolute text-sm text-gray-600 bg-gray-100 px-1.5 -top-5 left-4">Member Information</span>
            <p>Member points: 143</p>
          </div>
          <div className="row-span-3 relative flex [&>Button]:grow [&>Button]:w-0 rounded-lg outline outline-2 outline-gray-400/70 outline-offset-8 gap-3 pt-2">
            <span className="absolute text-sm text-gray-600 bg-gray-100 px-1.5 -top-5 left-4">Split Payment</span>
            <Button className="hover:bg-gray-300 border border-gray-400/80">Split</Button>
            <Button className="hover:bg-gray-300 border border-gray-400/80">50/50</Button>
          </div>
        </div>
        <div className="row-span-4 relative flex [&>Button]:grow flex-col rounded-lg outline outline-2 outline-gray-400/70 outline-offset-8 gap-3 pt-2">
          <span className="absolute text-sm text-gray-600 bg-gray-100 px-1.5 -top-5 left-4">Payment options</span>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white"><CreditCardIcon className="w-6 h-6 mr-2" />Credit card</Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white"><DebitCardIcon className="w-6 h-6 mr-2" />Debit card</Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white"><BanknotesIcon className="w-6 h-6 mr-2" />Cash</Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white"><CardGiftcard className="w-6 h-6 mr-2" />Gift card</Button>
        </div>
        <div className="row-span-2 relative flex flex-col [&>Button]:grow rounded-lg outline outline-2 outline-gray-400/70 outline-offset-8 gap-3 pt-2">
          <span className="absolute text-sm text-gray-600 bg-gray-100 px-1.5 -top-5 left-4">Extras</span>
          <Button className="bg-green-500 hover:bg-green-600 text-white" onClick={() => setIsCouponModalOpen(true)}><ReceiptPercentIcon className="w-6 h-6 mr-2" />Coupon</Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white" onClick={() => setIsLoyaltyModalOpen(true)}><Loyalty className="w-6 h-6 mr-2" />Loyalty</Button>
        </div>
        <div className="row-span-6 relative flex flex-col [&>Button]:grow rounded-lg outline outline-2 outline-gray-400/70 outline-offset-8 gap-3 pt-2">
          <span className="absolute text-sm text-gray-600 bg-gray-100 px-1.5 -top-5 left-4">Payment Amount</span>
          <Button className="hover:bg-gray-300 border border-gray-400/80">Exact</Button>
          {[5, 10, 20, 50, 100].map((bill) => (
            <Button className="hover:bg-gray-300 border border-gray-400/80" key={bill}>${bill}</Button>
          ))}
        </div>
      </div>
    </Layout>
  );
}

