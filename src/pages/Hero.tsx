import { useEffect, useState } from 'react';
import { useSleep } from '../hooks/useSleep';

const Hero = () => {
  const [heros, setHeros] = useState<any>(null);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/heros');
      const data = await res.json();
      await useSleep(1000);
      setHeros(data);
      setIsloading(false);
    };
    getData();
  }, []);

  if (isloading) return <div>Loading</div>;

  if (heros && !heros.length) return <div>No heros</div>;

  const renderHeros =
    heros &&
    heros.length &&
    heros.map((h: any) => <li key={h.name}>{h.name}</li>);

  return (
    <div>
      <ul>{renderHeros}</ul>
    </div>
  );
};

export default Hero;
