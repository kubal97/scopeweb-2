import React from 'react';
import './switch.scss';
import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';

const Switch = ({ darkMode, change }) => {

  return (
    <div className="switch">
      <Sun className="sun" />
      <input
        checked={darkMode}
        onChange={change}
        className="reactSwitchCheckbox"
        id={`reactSwitchNew`}
        type="checkbox"
      />
      <label
        style={{ background: darkMode && '#54BD7F' }}
        className="reactSwitchLabel"
        htmlFor={`reactSwitchNew`}
      >
        <span className={`reactSwitchButton`} />
      </label>
      <Moon className="moon" />
    </div>
  );
};

export default Switch;