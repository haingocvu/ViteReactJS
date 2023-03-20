import { useEffect, useState } from 'react';

import './App.css';
import { ListWithLoading } from './components/github/list';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((res, rej) => {
          setTimeout(() => {
            res(20);
          }, 20000);
        });
        const res = await fetch(
          `https://api.github.com/users/hacktivist123/repos`
        );
        const data = await res.json();

        return data;
      } catch (err) {
        throw new Error('Cus Error' + err);
      }
    };
    fetchData()
      .then((res) => {
        setRepos(res);
        setIsLoading(false);
      })
      .catch((err) => console.log);
  }, []);
  return (
    <div className="App">
      <ListWithLoading isLoading={isLoading} repos={repos} />
    </div>
  );
}

export default App;
