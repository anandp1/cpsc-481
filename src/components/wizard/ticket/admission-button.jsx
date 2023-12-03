const AdmissionButton = ({ ticketType, ticketMap, setTicketMap }) => {
  return (
    <form className="mx-auto">
      <div className="relative flex items-center max-w-[16rem]">
        {/* Decrease Button */}
        <button
          type="button"
          onClick={() => setTicketMap(ticketMap[ticketType] - 1)}
          className="bg-gray-300 text-gray-700 hover:bg-gray-400 border border-gray-300 rounded-l-md p-3 h-11"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        {/* Input Field */}
        <input
          type="text"
          className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm block w-full pb-6"
          placeholder=""
          value={ticketMap[ticketType]}
          required
        />
        {/* Ticket Type Label */}
        <div className="absolute bottom-1 start-1/2 -translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1">
          <span>{ticketType}</span>
        </div>
        {/* Increase Button */}
        <button
          type="button"
          onClick={() => setTicketMap(ticketMap[ticketType] + 1)}
          className="bg-gray-300 text-gray-700 hover:bg-gray-400 border border-gray-300 rounded-r-md p-3 h-11"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default AdmissionButton;
