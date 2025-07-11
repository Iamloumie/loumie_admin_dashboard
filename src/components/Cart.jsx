import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useStateContext } from '../contexts/ContextProvider';

import { cartData } from '../data/dummy';
import Button from './Button';



const Cart = () => {
  const { currentColor, setIsClicked, initialState } = useStateContext();
  
  // Function to close the chat window
  const handleCloseBar = () => {
    setIsClicked({ ...initialState, cart: false });
  }

  return (
    <div className="bg-half-transparent fixed w-full nav-item top-0 right-0">
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <p className="font-semibold text-lg">Shopping Cart</p>
          </div>
          <button
            type="button"
            onClick={handleCloseBar}
            style={{ color: 'rgb(153, 171, 180)', backgroundColor: 'rgba(153, 171, 180, 0.1)' }}
            aria-label="Close chat"
            className="text-xl rounded-full p-1 align-left hover:bg-light-gray dark:hover:bg-gray-600 hover:drop-shadow-xl"
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartData.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <div className='flex items-center  leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-lg h-80 w-24"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
                    <div className="flex mt-4 items-center gap-4">
                      <p className="text-lg font-semibold">{item.price}</p>
                      <div className="flex items-center border-1 border-r-0 border-color rounded">
                        <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>
                        <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">0</p>
                        <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>

        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  )
}

export default Cart