import React from 'react';
import { ButtonProps } from './interfaces';

import style from './styles.module.css';

export const Button: React.FC<ButtonProps> = ({ text, disabled }) => {
  return (
    <button className={style.button} disabled={disabled}>
      {text}
    </button>
  );
};
