'use client';

import { useEffect, useState } from 'react';
import { LoveEnvelope } from '@/components/LoveEnvelope';
import WorldMap from '@/components/WorldMap';

export default function Home() {
  const [showMap, setShowMap] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (showMap) {
      const t = setTimeout(() => setShowTitle(true), 700);
      return () => clearTimeout(t);
    }
  }, [showMap]);

  return (
    <main className="relative bg-[#fae1dd]">
      {/* LOVE ENVELOPE */}
      {!showMap && (
        <LoveEnvelope
          onFinish={() => {
            setTimeout(() => setShowMap(true), 1500);
          }}
        />
      )}

      {/* WORLD SECTION */}
      <section
        className={`
          min-h-screen
          flex flex-col items-center
          transition-all
          duration-[1600ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${showMap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'}
        `}
      >
        {/* AIR */}
        <div className="h-5 md:h-20" />

        {/* TITLE BLOCK */}

        <p
          className={`
 max-w-2xl text-center
              text-base md:text-lg
              text-[#7a2d2d]
              transition-all duration-[1200ms] delay-200
              ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
        >
          Hover over a country — and see how i'd say "I love you" there ❤️
        </p>

        {/* MAP */}
        <div className="w-full max-w-6xl px-4">
          <WorldMap />
        </div>

        {/* BOTTOM AIR */}
        <div className="h-5 md:h-20" />
      </section>
    </main>
  );
}
