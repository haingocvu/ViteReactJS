import { useQuery } from 'react-query';

const RQHero = () => {
  const { isLoading, data } = useQuery('rq-hero', () => {
    return fetch('http://localhost:3000/heros').then((res) => res.json());
  });

  if (isLoading) return <div>Loading...</div>;

  const renderHeros =
    data && data.map((d: any) => <li key={d?.name}>{d?.name}</li>);

  return (
    <div>
      <ul>{renderHeros}</ul>
    </div>
  );
};

export default RQHero;
