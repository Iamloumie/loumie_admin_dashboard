import { React, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

import avatar from '../data/avatar.jpg';

// Creating the Navbar buttons
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
)



const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();


  // Function to handle window resize and set screen size
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize(); // Set initial screen size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // keeping track of the window size to close the sidebar on small screens
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  
  }, [screenSize]);
  


  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {/* the three line menu that opens and closes sidebar */}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<AiOutlineMenu />}
        color={currentColor}
      />

      {/* other navbar menus (shoppingcart and the likes) */}
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          icon={<FiShoppingCart />}
          color={currentColor}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick('chat')}
          icon={<BsChatLeft />}
          color={currentColor}
          dotColor="#03C9D7"
        />
        <NavButton
          title="Notification"
          customFunc={() => handleClick('notification')}
          icon={<RiNotification3Line />}
          color={currentColor}
        />
        
        {/* User profile navigation */}
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
        >
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              src={avatar}
              alt="profile logo"
              className="rounded-full w-8 h-8"
            />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {' '}
              <span className="text-gray-400 fontt-bold ml-1 text-14">Loumie</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />

          </div>

        </TooltipComponent>

        {/* What happens when the nav icons are clicked */}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>


  )
}

export default Navbar