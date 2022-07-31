import React, { useState } from 'react';
import { useDebounce } from './hooks/useDebounce';
import { useSearchQuery } from './store/dapplets/dapplets.api';
import { Input } from './ui/Input';
import { ItemsList } from './components/ItemsList';

import styles from './styles.module.css';

const App: React.FC = () => {
  const [search, setSearch] = useState('privacy');
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchQuery(debounced);
  console.log('data', data);
  return (
    <main className={styles.main}>
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      <ItemsList isLoading={isLoading} isError={isError} items={data?.data} />
    </main>
  );
};

export default App;
