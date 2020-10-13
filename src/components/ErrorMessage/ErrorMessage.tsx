import React from 'react';
import {VscError} from 'react-icons/vsc';
import {GrFormClose} from 'react-icons/gr';

import styles from './ErrorMessage.module.sass';

interface ErrorMessageProps{
  message: string;
  onErrorClose: Function;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({message, onErrorClose}) => {
  return (
    <div className={styles.error}>
      <div>
        <VscError size={20} />
        <p>{message}</p>
      </div>
      <button onClick={() => onErrorClose()}><GrFormClose size={20}/></button>
    </div>
  );
}

export default ErrorMessage;