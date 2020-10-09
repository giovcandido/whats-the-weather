import React from 'react';
import {FaLightbulb, FaRegLightbulb} from 'react-icons/fa';

interface ILampButtonProps{
  lightOff: boolean;
  handleLightSwitch: Function;
}

const LampButton: React.FC<ILampButtonProps> = ({lightOff, handleLightSwitch}) => {
  const handleButtonClick = () =>{
    handleLightSwitch(!lightOff);
  }

  const renderButtonContent = () => {
    if(lightOff){
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
    <button onClick={handleButtonClick}>
      {renderButtonContent()}
    </button>
  );
}

export default LampButton;