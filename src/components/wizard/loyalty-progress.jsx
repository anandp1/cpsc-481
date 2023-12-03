const LoyaltyProgress = ({ section }) => {
  return (
    <div className="flex flex-row justify-between items-center mb-8">
      <div className="flex flex-col items-center mt-5">
        <div
          className={`w-6 h-6 rounded-full ${
            section === "Enter Number"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500"
          } flex items-center justify-center font-bold`}
        >
          1
        </div>
        <p className="text-sm mt-1">Enter Number</p>
      </div>

      <div className="w-44 h-1 bg-gray-300" />

      <div className="flex flex-col items-center mt-5">
        <div
          className={`w-6 h-6 rounded-full ${
            section === "Loyalty Points"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500"
          } flex items-center justify-center font-bold`}
        >
          2
        </div>
        <p className="text-sm mt-1">Loyalty Points</p>
      </div>
    </div>
  );
};

export default LoyaltyProgress;
