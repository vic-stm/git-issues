// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IssueList } from '@git-issues/issue-list';
import styles from './app.module.css';

import { TextInput } from '@git-issues/ui';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export function App() {
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  const [repoUrl, setRepoUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFirstSearch(true)
    setRepoUrl(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && repoUrl.length) {
      setIsFirstSearch(false);
    }
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={styles['container']}
        style={
          isFirstSearch
            ? { justifyContent: 'center' }
            : { justifyContent: 'start', height: 'auto', marginTop: '30px' }
        }
      >
        <TextInput
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Introduzca la URL del repositorio de GitHub ..."
          value={repoUrl}
        />
        {!isFirstSearch ? <IssueList repoUrl={repoUrl} /> : null}
      </div>
    </QueryClientProvider>
  );
}

export default App;
