'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Geo } from '../module/type';
import { loveByCountry } from '@/data/LoveByCountry';
import { countryCodeMap } from '@/data/CountryCodeMap';
import { text } from 'stream/consumers';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

export const WorldMap = () => {
  const [toolTip, setToolTip] = useState<{ text: string; x: number; y: number } | null>(null);

  return (
    <>
      <div>
        {toolTip && (
          <div
            className="fixed pointer-events-none bg-black text-white px-3 py-1 rounded-lg text-sm"
            style={{
              left: toolTip.x + 12,
              top: toolTip.y + 12,
            }}
          >
            {toolTip.text}{' '}
          </div>
        )}

        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  className="fill-gray-300 hover:fill-red-500 stroke-white"
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(e) => {
                    const isoCode = countryCodeMap[geo.id] ?? 'EN';

                    const loveText = loveByCountry[isoCode] ?? 'I love you';

                    setToolTip({
                      text: loveText,
                      x: e.clientX,
                      y: e.clientY,
                    });
                  }}
                  onMouseLeave={() => setToolTip(null)}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </>
  );
};
