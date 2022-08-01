import React, { useState } from 'react';
import { IData } from '../../store/dapplets/interfaces';
import { Button } from '../../ui/Button/';
import { ReactComponent as LinesIcon } from '../../assets/lines_icon.svg';

import styles from './styles.module.css';

export const ItemsList: React.FC<{
  isLoading: boolean;
  isError: boolean;
  items?: Array<IData> | null;
}> = ({ isError, isLoading, items }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.itemsList}>
      {isError && <p> Ошибка</p>}
      {isLoading ? (
        <p>Загрузка</p>
      ) : (
        items?.map((item) => (
          <div className={styles.item} key={item.id}>
            <LinesIcon />
            <img
              className={styles.itemIcon}
              src={`https://dapplets-hiring-api.herokuapp.com/api/v1/files/${item.icon}`}
              alt="icon"
            />

            <div className={styles.titleContainer}>
              <h3>{item.title}</h3>
              <small>{item.address}</small>
            </div>
            <p className={styles.itemDescription}>{item.description}</p>
            <small className={styles.itemAuthor}>{item.author}</small>
            <Button text="INSTALL" />
          </div>
        ))
      )}
    </div>
  );
};
