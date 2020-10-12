import React from 'react';
import {FaLightbulb, FaRegLightbulb} from 'react-icons/fa';

import styles from './ThemeButton.module.sass';

interface IThemeButtonProps{
  dark: boolean;
  onThemeChange: Function;
}

const ThemeButton: React.FC<IThemeButtonProps> = ({dark, onThemeChange}) => {
  const renderButtonContent = () => {
    if(dark){
      return (
        <>
          <FaRegLightbulb size={15} />
          <span>Lights out</span>
        </>
      );
    }

    return (
      <>
        <FaLightbulb size={15} />
        <span>Lights on</span>
      </>
    );
  }

  return (
    <button className={styles.button} onClick={() => onThemeChange()}>
      {renderButtonContent()}
    </button>
  );
}

export default ThemeButton;