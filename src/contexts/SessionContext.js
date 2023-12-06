import { createContext, useContext, useReducer } from "react";

const SessionContext = createContext();

const sessionReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_MOVIE":
      return { ...state, selectedMovie: action.payload };
    case "SELECT_TICKETS":
      return { ...state, selectedTickets: action.payload };
    case "SELECT_SEATS":
      return { ...state, selectedSeats: action.payload };
    case "SELECT_SHOWTIME":
      return {
        ...state,
        selectedMovie: {
          ...state.selectedMovie,
          date: action.payload.date,
          startTime: action.payload.startTime,
        },
      };
    case "CART_SET_ITEMS":
      return {
        ...state,
        cart: action.payload,
      };
    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CART_CLEAR":
      return {
        ...state,
        cart: [],
      };
    case "CLEAR_SESSION":
      return {
        selectedMovie: null,
        selectedTickets: {
          child: 0,
          general: 0,
          senior: 0,
          bundle: null,
        },
        selectedSeats: [],
        scannedTicket: null,
      };
    case "SWAP_TICKET":
      return {
        ...state,
        scannedTicket: action.payload,
      };
    case "CANCEL_SWAP":
      return {
        ...state,
        scannedTicket: null,
      };
    case "SET_USED_POINTS":
      return {
        ...state,
        usedPoints: action.payload,
    };
    // Add more cases as needed
    default:
      return state;
  }
};

const SessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sessionReducer, {
    selectedMovie: null,
    selectedTickets: {
      child: 0,
      general: 0,
      senior: 0,
      bundle: null,
    },
    selectedSeats: [],
    cart: [],
    usedPoints: 0,
    // Add more initial state properties as needed
  });

  return (
    <SessionContext.Provider value={{ state, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
};

const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSessionContext must be used within a SessionProvider");
  }
  return context;
};

export { SessionProvider, useSessionContext };
