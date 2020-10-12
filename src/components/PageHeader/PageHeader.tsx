import React from 'react';

import styles from './PageHeader.module.sass';
import logo from '../../assets/logo.svg';

import ThemeButton from '../../components/ThemeButton/ThemeButton';

interface IPageHeaderProps{
  darkTheme: boolean;
  onThemeChange: Function;
}

const PageHeader: React.FC<IPageHeaderProps> = ({darkTheme, onThemeChange}) => {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.logo}>
        <img src={logo} alt="Green clouds logo" />
        <h3>What's the weather?</h3>
      </div>
    
      <div className={styles.settings}>
        <ThemeButton dark={darkTheme} onThemeChange={onThemeChange}/>
      </div>
    </header>
  );
}

export default PageHeader;