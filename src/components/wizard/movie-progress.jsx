const Progress = ({ section }) => {
  return (
    <div className="flex flex-row justify-between items-center mb-8">
      <div className="flex flex-col items-center mt-5">
        <div
          className={`w-6 h-6 rounded-full ${
            section === "Movie Selection"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500"
          } flex items-center justify-center font-bold`}
        >
          1
        </div>
        <p className="text-sm mt-1">Movie Selection</p>
      </div>

      <div className="w-44 h-1 bg-gray-300" />

      <div className="flex flex-col items-center mt-5">
        <div
          className={`w-6 h-6 rounded-full ${
            section === "Tickets"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500"
          } flex items-center justify-center font-bold`}
        >
          2
        </div>
        <p className="text-sm mt-1">Tickets</p>
      </div>

      <div className="flex items-center">
        <div className="w-44 h-1 bg-gray-300" />
      </div>

      <div className="flex flex-col items-center mt-5">
        <div
          className={`w-6 h-6 rounded-full ${
            section === "Seat Selection"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500"
          } flex items-center justify-center font-bold`}
        >
          3
        </div>
        <p className="text-sm mt-1">Seat Selection</p>
      </div>
    </div>
  );
};

export default Progress;
