import React from 'react';
import {FaLightbulb, FaRegLightbulb} from 'react-icons/fa';

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
    <button className="btnLink" onClick={() => onThemeChange()}>
      {renderButtonContent()}
    </button>
  );
}

export default ThemeButton;