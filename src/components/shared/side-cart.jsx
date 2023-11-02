import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Box, Modal, IconButton, TextField, Button, Snackbar, Alert } from "@mui/material";
import SendIcon from '@mui/icons-material/Send'; 
import CloseIcon from '@mui/icons-material/Close'; 


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SideCart = ({ isCheckout }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex flex-col border-l w-1/3 bg-white rounded-tl-lg shadow-lg p-4 z-1500">
        <div className="grid grid-cols-1 gap-2 divide-y">
          <div className="flex items-center justify-between py-3">
            <p className="text-2xl text-gray-800">General Admission</p>
            <p className="text-2xl text-gray-800">$12.99</p>
          </div>
          <div className="flex items-center justify-between py-3">
            <p className="text-2xl text-gray-800">Concession - Popcorn</p>
            <p className="text-2xl text-gray-800">$5.99</p>
          </div>
          <div className="flex items-center justify-between py-3">
            <p className="text-2xl text-gray-800">Concession - Pop</p>
            <p className="text-2xl text-gray-800">$4.99</p>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-4" />
        <div className="flex-grow"></div>
        <div className="flex items-center justify-between py-3">
          <p className="text-xl font-semibold">Total</p>
          <p className="text-xl text-green-600">$23.97</p>
        </div>
        <Link href="/checkout">
          {isCheckout ? <button className="bg-blue-500 text-white text-2xl py-3 rounded-full w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" onClick={handleOpenModal}>
          Finalize
          </button>: <button className="bg-blue-500 text-white text-2xl py-3 rounded-full w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
           Checkout
          </button>}
          
        </Link>
        <Modal
  open={isModalOpen}
  onClose={handleCloseModal}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <Box sx={style}>
    <IconButton
      onClick={handleCloseModal}
      style={{
        position: 'absolute',
        right: '8px',
        top: '8px',
        padding: '0',
      }}
    >
      <CloseIcon />
    </IconButton>
    <h2 id="simple-modal-title" style={{ 
        textAlign: 'center', 
        fontSize: '24px', 
        fontWeight: 'bold',
        margin: '20px 0', 
        color: '#4a4a4a', 
      }}>
      Payment Successful!
    </h2>
    <p id="simple-modal-description" style={{ marginBottom: '30px', textAlign: 'center' }}> {/* Centered text */}
      Tickets:
      <br /> x2 General
      <br /> x1 Child
    </p>
    <button
      onClick={() => window.print()}
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        marginTop: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: '#3B82F6 ',
      }}
    >
      Print
    </button>
    <form noValidate autoComplete="off">
  <label htmlFor="email-address-input" style={{ display: 'block', marginBottom: '10px', textAlign: 'center' }}>
    Email Address:
  </label>
  <div style={{ display: 'flex', marginBottom: '20px' }}> 
    <input
      type="email"
      id="email-address-input"
      placeholder="Enter your email"
      style={{
        flex: 1, // Take up the available space
        padding: '10px',
        border: '1px solid #ccc',
        borderTopLeftRadius: '4px', 
        borderBottomLeftRadius: '4px', 
        marginRight: '-1px', 
      }}
    />
    <button
      type="submit" 
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        backgroundColor: '#f0f0f0',
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px', 
        cursor: 'pointer',
      }}
    >
      <SendIcon /> 
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
