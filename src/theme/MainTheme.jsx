import React from "react";
import SwitchTheme from "../components/shared/SwitchTheme";
import Navbar from "../components/shared/Navbar";
import useTheme from "../hooks/useTheme";

const MainTheme = ({children}) => {
  const { checked, darkMode, setChecked, setDarkMode } = useTheme();
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";
  return (
    <main className={mainClass}>
      <Navbar>
      <SwitchTheme
        setDarkMode={setDarkMode}
        checked={checked}
        setChecked={setChecked}
      />
      </Navbar>
        {children}
    </main>
  );
};

export default MainTheme;
