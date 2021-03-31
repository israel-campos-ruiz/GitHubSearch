import React, { useRef } from "react";
import "../../styles/shared/SwitchTheme.css"

const SwitchTheme = ({ checked, setDarkMode, setChecked }) => {
  const ref = useRef(null);
  const handleChange = () => {
    setChecked(ref?.current?.checked);
    setDarkMode(ref?.current?.checked);
  };

  return (
    <div className="dark-mode">
      <input
        ref={ref}
        onChange={handleChange}
        type="checkbox"
        checked={checked}
        className="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
};

export default SwitchTheme;
