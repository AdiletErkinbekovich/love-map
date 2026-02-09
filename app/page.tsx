import Image from 'next/image';
import WorldMap from '../components/WorldMap';

export default function Home() {
  return (
    <main>
      <h1 className="text-blue-500">ohayo!</h1>
      <WorldMap />
    </main>
  );
}
