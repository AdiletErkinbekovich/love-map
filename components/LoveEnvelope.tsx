'use client';

import { useState, useEffect } from 'react';

type Props = {
  onFinish: () => void;
};

export const LoveEnvelope = ({ onFinish }: Props) => {
  const [open, setOpen] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  const handleClick = () => {
    if (open) return;

    setOpen(true);

    // появление подписи
    setTimeout(() => {
      setShowSubtext(true);
    }, 1500);

    // переход к WorldMap
    setTimeout(() => {
      onFinish();
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fae1dd]">
      <div className="relative">
        <div className="relative top-[50px] animate-envelope cursor-pointer" onClick={handleClick}>
          <div className="relative w-[300px] h-[200px] bg-[#f08080] envelope">
            <div className="front"></div>

            {/* CARD */}
            <div
              className={`
                absolute bg-[#eae2b7] w-[270px] h-[170px] left-[15px]
                shadow-2xl transition-all duration-700 ease-in-out
                ${open ? '-top-[120px]' : 'top-[5px]'}
                flex flex-col items-center justify-center text-center
              `}
            >
              {/* MAIN TEXT */}
              <div className="text-3xl font-semibold tracking-wide">I love you</div>

              {/* SUBTEXT */}
              <div
                className={`
                  mt-2 text-sm leading-snug text-gray-600
                  transition-all duration-500 ease-out
                  ${showSubtext ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
                `}
              >
                <p>but in all languages</p>
                <p>of the world</p>
              </div>
            </div>

            {/* HEARTS */}
            <div
              className={`absolute hearts transition-opacity duration-500 ${
                open ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
              <div className="four"></div>
              <div className="five"></div>
            </div>
          </div>
        </div>

        <div className="shadow"></div>
      </div>
    </div>
  );
};
