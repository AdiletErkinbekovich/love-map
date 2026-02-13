'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import { countryCodeMap } from '@/data/CountryCodeMap';

import { loveByISO } from '@/data/LoveByISO';
import { LoveTooltip } from '../LoveTooltip';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

export const WorldMap = () => {
  const [inplace, setInplace] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div>
        {tooltip && (
          <div
            className="fixed pointer-events-none z-50"
            style={{
              left: tooltip.x + 1,
              top: tooltip.y + 1,
              transform: 'translate(12px, 12px)',
            }}
          >
            <LoveTooltip text={tooltip.text} inplace={inplace} visible={visible} />
          </div>
        )}

        <div className="container">
          <ComposableMap>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    className="fill-[#f3c6c6]
  hover:fill-[#f08080]
  stroke-[#fff5f5]
  transition-all
  duration-300
  hover:scale-[1.01]"
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(e) => {
                      const iso = countryCodeMap[geo.id] ?? 'US';
                      const loveText = loveByISO[iso] ?? 'I love you';

                      setInplace(geo.properties.name);
                      setTooltip({
                        text: loveText,
                        x: e.clientX,
                        y: e.clientY,
                      });
                      setVisible(true);
                    }}
                    onMouseMove={(e) => {
                      setTooltip((prev) =>
                        prev
                          ? {
                              ...prev,
                              x: e.clientX,
                              y: e.clientY,
                            }
                          : null,
                      );
                    }}
                    onMouseLeave={() => {
                      setVisible(false);
                      setTooltip(null);
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </>
  );
};
