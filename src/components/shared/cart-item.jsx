import React, { useState } from 'react';

import { Popover } from '@mui/material';
import { Delete } from '@mui/icons-material';

const CartItem = ({ itemName, price }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="flex items-center justify-between">
            <p className="text-xl grow text-gray-800 p-3 pl-1">{itemName}</p>
            <p className="text-xl text-gray-800 py-3 px-4">${price}</p>
            <button onClick={handleClick} className="w-12 rounded-tr-lg rounded-br-lg bg-red-600 text-white hover:bg-red-700 py-3">
                <Delete />
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{ zIndex: 2000 }}
            >
                <div className='flex flex-col gap-4 p-4 w-64'>
                    <p className='text-lg font-semibold'>Are you sure you want to delete this item?</p>
                    <div className='flex gap-2 justify-end'>
                        <button onClick={handleClose} className="rounded-lg shadow-md text-lg hover:bg-gray-200 border border-gray-400/80 py-2 px-4">
                            Cancel
                        </button>
                        <button onClick={handleClose} className="rounded-lg shadow-md text-lg  bg-red-600 text-white hover:bg-red-700 py-2 px-4">
                            Delete
                        </button>
                    </div>
                </div>
            </Popover>
        </div>
    );
};

export default CartItem;