import Link from "next/link";
import { useState } from "react";
import { useSessionContext } from "../../../contexts/SessionContext";
import { bundles } from "../../../lib/data";
import AdmissionButton from "./admission-button";

const TicketSelection = () => {
  const [ticketMap, setTicketMap] = useState({
    Child: 0,
    General: 0,
    Senior: 0,
  });
  const [selectedBundle, setSelectedBundle] = useState();
  const { dispatch } = useSessionContext();

  const handleTicketSubmission = () => {
    dispatch({
      type: "SELECT_TICKETS",
      payload: {
        child: ticketMap["Child"],
        general: ticketMap["General"],
        senior: ticketMap["Senior"],
        bundle: selectedBundle,
      },
    });
  };

  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-md">
      <p className="text-xl font-semibold mb-2">Admissions</p>
      <div className="flex flex-col mb-4 space-y-4">
        <AdmissionButton
          ticketType="Child"
          ticketMap={ticketMap}
          setTicketMap={setTicketMap}
        />
        <AdmissionButton
          ticketType="General"
          ticketMap={ticketMap}
          setTicketMap={setTicketMap}
        />
        <AdmissionButton
          ticketType="Senior"
          ticketMap={ticketMap}
          setTicketMap={setTicketMap}
        />
      </div>
      <p className="text-xl font-semibold mb-2">Bundles</p>
      <div className="flex mb-4 space-x-4">
        {bundles.map((bundle) => (
          <button
            className={`flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ${
              bundle === selectedBundle ? "bg-blue-600" : ""
            }`}
            onClick={() => setSelectedBundle(bundle)}
            key={bundle}
          >
            {bundle}
          </button>
        ))}
      </div>

      <Link href="/wizard/seating" className="text-white rounded-md mb-2 mt-20">
        <button
          className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full"
          onClick={handleTicketSubmission}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default TicketSelection;
