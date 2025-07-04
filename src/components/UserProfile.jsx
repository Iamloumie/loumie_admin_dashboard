import React from 'react';
import { MdOutlineCancel} from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import avatar from '../data/avatar.jpg';

import { useStateContext } from '../contexts/ContextProvider';

const UserProfile = () => {
  const { currentColor, setIsClicked, initialState } = useStateContext();

  // Function to close the chat window
  const handleCloseBar = () => {
    setIsClicked({ ...initialState, userProfile: false });
  }
  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
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

      {/* Avatar and admin info */}
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          src={avatar}
          alt="User Profile"
          className="rounded-full w-24 h-24"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">Adedamola Lawal</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">Administrator</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">info@loumieshop.com</p>
        </div>
      </div>

      <div>
        {userProfileData.map((item, index) => {
          return (
            <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-xl rounded-lg p-3  hover:bg-light-gray dark:hover:bg-[#42464D] hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <div>
                <p className="font-semibold dark:text-gray-200">{item.title}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400">{item.desc}</p>
              </div>
            </div>
          )
        })}

        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Logout"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  )
}

export default UserProfile