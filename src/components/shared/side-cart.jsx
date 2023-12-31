import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Box, Modal, IconButton, Popover } from "@mui/material";
import {
  Send,
  Close,
  ShoppingCart,
  ShoppingCartCheckout,
  Print,
} from "@mui/icons-material";
import CartItem from "./cart-item";
import { useSessionContext } from "../../contexts/SessionContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SideCart = ({ isCheckout }) => {
  const { state, dispatch } = useSessionContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clearAnchor, setClearAnchor] = useState(null);
  const clearOpen = Boolean(clearAnchor);
  const clearId = clearOpen ? "clear-popover" : undefined;
  const [discount, setDiscount] = useState(0);
  const { usedPoints } = state;

  const cartItems = state.cart;

  const calculateTotal = () => {
    const numberOfBundles = cartItems.filter((item) => item.bundle).length;

    const discount = usedPoints / 100; // 100 points = $1 off

    return (
      state.cart.reduce((total, item) => total + item.price, 0) -
      discount +
      numberOfBundles * 5
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClearOpen = (event) => {
    setClearAnchor(event.currentTarget);
  };

  const handleClearClose = () => {
    setClearAnchor(null);
  };

  const handleClear = () => {
    dispatch({
      type: "CART_CLEAR",
    });
    setClearAnchor(null);
  };

  const totalPrice = calculateTotal().toFixed(2); // Calculate total price and format it
  useEffect(() => {
    if (cartItems.length === 0) {
      dispatch({ type: "SET_USED_POINTS", payload: 0 });
    }
  }, [cartItems, dispatch]);

  const ticketMap = {
    "General Ticket": 0,
    "Senior Ticket": 0,
    "Child Ticket": 0,
    Bundle: 0,
  };

  // populate ticketMap
  console.log(cartItems);
  cartItems.forEach((item) => {
    if (item.bundle) {
      ticketMap["Bundle"] += 1;
    } else {
      ticketMap[item.itemName] += 1;
    }
  });
  return (
    <>
      <div className="flex flex-col border-l w-1/3 bg-white rounded-tl-lg shadow-lg p-4 z-1500">
        <div className="grid grid-cols-1 divide-y overflow-scroll">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              itemId={item.id}
              itemName={item.itemName}
              price={item.price}
              seatNumber={item.seatNumber}
              movie={item.movie}
              bundle={item.bundle}
              isSwap={item.isSwap}
            />
          ))}
        </div>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-xl font-semibold text-gray-600">Cart is empty</p>
          </div>
        ) : (
          <>
            <hr className="border-t-2 border-gray-300 my-4" />
            <button
              className="text-gray-600 hover:bg-gray-200 border border-gray-400/80 text-lg shadow-md py-2 rounded-full w-1/2 self-end"
              onClick={handleClearOpen}
            >
              <Close className="w-6 h-6 -mt-1" /> Clear All
            </button>
            <Popover
              id={clearId}
              open={clearOpen}
              anchorEl={clearAnchor}
              onClose={handleClearClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ zIndex: 2000 }}
            >
              <div className="flex flex-col gap-4 p-4 w-64">
                <p className="text-lg font-semibold">
                  Are you sure you want to delete all items?
                </p>
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={handleClearClose}
                    className="rounded-lg shadow-md text-lg hover:bg-gray-200 border border-gray-400/80 py-2 px-4"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleClear}
                    className="rounded-lg shadow-md text-lg  bg-red-600 text-white hover:bg-red-700 py-2 px-4"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </Popover>
          </>
        )}

        <div className="flex-grow"></div>
        <div className="flex items-center justify-between py-3">
          <p className="text-xl font-semibold">Total</p>
          <p className="text-xl text-green-600">${totalPrice}</p>
        </div>
        <Link href="/checkout">
          {isCheckout ? (
            <button
              className="bg-blue-500 text-white text-2xl py-3 rounded-full w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={handleOpenModal}
            >
              <ShoppingCartCheckout className="w-6 h-6 mr-2" />
              Finalize
            </button>
          ) : (
            <button className="bg-blue-500 text-white text-2xl py-3 rounded-full w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <ShoppingCart className="w-6 h-6 mr-2" />
              Checkout
            </button>
          )}
        </Link>
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          sx={{ zIndex: 2000 }}
        >
          <Box sx={style}>
            <IconButton
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                right: "8px",
                top: "8px",
                padding: "0",
              }}
            >
              <Close />
            </IconButton>
            <h2
              id="simple-modal-title"
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                margin: "20px 0",
                color: "#4a4a4a",
              }}
            >
              Payment Successful!
            </h2>
            <p
              id="simple-modal-description"
              style={{ marginBottom: "30px", textAlign: "center" }}
            >
              {/* Centered text */}
              Tickets:
              {ticketMap["Bundle"] > 0 && <p>x{ticketMap["Bundle"]} Bundle</p>}
              <p>
                {ticketMap["Child Ticket"] > 0 && (
                  <p> x{ticketMap["Child Ticket"]} Child </p>
                )}
                {ticketMap["General Ticket"] > 0 && (
                  <>
                    <p> x{ticketMap["General Ticket"]} General </p>
                  </>
                )}
                {ticketMap["Senior Ticket"] > 0 && (
                  <>
                    <p> x{ticketMap["Senior Ticket"]} Senior </p>
                  </>
                )}
              </p>
            </p>
            <button
              onClick={() => window.print()}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                marginTop: "20px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundColor: "#3B82F6 ",
                color: "#fff",
              }}
            >
              <Print /> Print
            </button>
            <form noValidate autoComplete="off">
              <label
                htmlFor="email-address-input"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                Email Address:
              </label>
              <div style={{ display: "flex", marginBottom: "20px" }}>
                <input
                  type="email"
                  id="email-address-input"
                  placeholder="Enter your email"
                  style={{
                    flex: 1, // Take up the available space
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderTopLeftRadius: "4px",
                    borderBottomLeftRadius: "4px",
                    marginRight: "-1px",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "10px",
                    border: "1px solid #ccc",
                    backgroundColor: "#f0f0f0",
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  <Send />
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export { SideCart };
