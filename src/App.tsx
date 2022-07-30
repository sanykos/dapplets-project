import React, { useState } from 'react';
import { useDebounce } from './hooks/useDebounce';
import { useSearchQuery } from './store/dapplets/dapplets.api';
import { Input } from './ui/Input';

import styles from './styles.module.css';

const App: React.FC = () => {
  const [search, setSearch] = useState('privacy');
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchQuery(debounced);
  console.log('data', data);
  // console.log('searchIcon', SearchIcon);
  return (
    <main className={styles.main}>
      {isError && <div>Ошибка при загрузке данных</div>}
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      {isLoading ? (
        <p>Загрузка</p>
      ) : (
        data?.data?.map((item) => (
          <div key={item.id}>
            {/* <img src={item.icon} alt="" /> */}
            {item.title}
          </div>
        ))
      )}
    </main>
  );
};

export default App;
