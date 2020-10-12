import React from 'react';

import styles from './PageFooter.module.sass';

const PageFooter: React.FC = () => {
  return (
    <footer className={styles.pageFooter}>
      <p>Made by <a href="https://github.com/giovcandido" rel="noopener noreferrer" target="_blank">Giovani Candido</a></p>
    </footer>  
  );
}

export default PageFooter;