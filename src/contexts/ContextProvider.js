import { React, createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setIsClicked] = useState(initialState);

    // Function to handle clicks on the navbar buttons
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]:true })
    }

    // Function to not open the sidebar on small screens on default
    const [screenSize, setScreenSize] = useState(undefined)

    // Functions to set the state of themecolors and its modes
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');

    // Theme settings state to close the theme sidebar
    const [themeSettings, setThemeSettings] = useState(false)

    // Set theme Mode
    const setMode = (e) => {
        setCurrentMode(e.target.value);

        // if the user comes next time, the theme mode should still be saved
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);
    }

    // Set theme color
    const setColor = (color) => {
        setCurrentColor(color);

        // if the user comes next time, the theme color should still be saved
        localStorage.setItem('colorMode', color);

        setThemeSettings(false);
    }

    


    return (
        <StateContext.Provider
            value={{
                activeMenu, setActiveMenu,
                isClicked, setIsClicked,
                handleClick,
                screenSize, setScreenSize,
                currentColor, setColor,
                currentMode, setMode,
                themeSettings, setThemeSettings
            }}
        >
            { children }
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);