import React from 'react';

import styles from './ThemeContainer.module.sass';

const ThemeContainer: React.FC<{dark: boolean}> = ({children, dark}) => {
  const themeClass = dark ? styles.dark : styles.light;

  return (
    <div className={themeClass}>
      {children}
    </div>
  );
}

export default ThemeContainer;