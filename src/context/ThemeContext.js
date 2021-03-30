import React, { createContext } from 'react'
import useTheme from '../hooks/useTheme';
export const ThemeContext = createContext();
const ThemeContextProvider = ({children}) => {
    const { darkMode, checked, setDarkMode, setChecked } = useTheme();
    const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

    return (
        <ThemeContext.Provider value={{darkMode, checked, setDarkMode, setChecked, mainClass}}>
          {children}  
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
