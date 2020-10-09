import React from 'react';
import {FaLightbulb, FaRegLightbulb} from 'react-icons/fa';

interface IThemeButtonProps{
  dark: boolean;
  handleThemeChange: Function;
}

const ThemeButton: React.FC<IThemeButtonProps> = ({dark, handleThemeChange}) => {
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
    <button onClick={() => handleThemeChange()}>
      {renderButtonContent()}
    </button>
  );
}

export default ThemeButton;