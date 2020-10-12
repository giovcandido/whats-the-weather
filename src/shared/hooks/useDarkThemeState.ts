import { useState, useEffect } from 'react';

const useDarkThemeState = (initialState: boolean) => {
  const [state, setState] = useState<boolean>(initialState);
  
  useEffect(() => {
    const prevState = localStorage.getItem('@whats-the-weather:Dark');

    if(prevState){
      const parsedPrevState: boolean = JSON.parse(prevState);
      
      setState(parsedPrevState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@whats-the-weather:Dark', JSON.stringify(state));
  }, [state]);

  return [state, setState] as const
}

export default useDarkThemeState;