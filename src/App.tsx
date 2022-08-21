import React, { ChangeEvent, DOMElement, useEffect, useState } from 'react';
import { useDebounce } from './hooks/useDebounce';
import { useSearchQuery } from './store/dapplets/dapplets.api';
import { Input } from './ui/Input';
import { ItemsList } from './components/ItemsList';

import styles from './styles.module.css';

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchQuery({
    search: debounced,
    limit: 5,
  });

  return (
    <main className={styles.main}>
      <div className={styles.filter}>
        <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      </div>
      <ItemsList isLoading={isLoading} isError={isError} items={data?.data} />
    </main>
  );
};

export default App;
