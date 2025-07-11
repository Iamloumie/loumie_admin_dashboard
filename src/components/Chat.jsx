import React from 'react';
import { MdOutlineCancel} from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { currentColor, setIsClicked, initialState } = useStateContext();

  // Function to close the chat window
  const handleCloseBar = () => {
    setIsClicked({ ...initialState, chat: false });
  }

  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8  rounded-lg w-96">
      
      <div className="flex justify-between items-center">

        <div className="flex gap-5">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button type="button" className="text-xs rounded-full p-1 px-3 hover:bg-light-gray dark:hover:bg-[#42464D] hover:drop-shadow-xl">
            5 New
          </button>
        </div>
        <button
          type="button"
          onClick={handleCloseBar}
          style={{ color: 'rgb(153, 171, 180)', backgroundColor: 'rgba(153, 171, 180, 0.1)' }}
          aria-label="Close chat"
          className="text-2xl rounded-full p-1 align-left hover:bg-light-gray dark:hover:bg-gray-600 hover:drop-shadow-xl"
        >
          <MdOutlineCancel />
        </button>
      </div>

      {/* Chat body */}
      <div className="mt-5">
        {chatData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.message}
                  className="rounded-full w-10 h-10"
                />
                <span
                  style={{ background: item.dotColor }}
                  className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                />
              </div>

              <div>
                <p className="font-semibold dark:text-gray-200">{item.message}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
              </div>

            </div>
          )
        })}

        {/* See all messages button */}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  )
}

export default Chat