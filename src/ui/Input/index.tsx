import React, { ChangeEvent, useRef } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

import styles from './styles.module.css';

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input: React.FC<InputProps> = ({ onChange, value = '' }) => {
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <div className={styles.inputWrapper}>
      <SearchIcon
        className={styles.searchIcon}
        onClick={() => ref.current?.focus()}
      />
      <input
        ref={ref}
        className={styles.input}
        type="text"
        placeholder="search"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
