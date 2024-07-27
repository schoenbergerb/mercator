'use client';

import { Freighter } from '@/components/ships/freighter';
import { useEffect } from 'react';

export const ShipsMenu = () => {
  useEffect(() => {}, []);

  const progress = 44;

  return (
    <div className="flex-grow border-t-4 border-double border-mercator-blue text-mercator-pink py-2 px-3 ">
      <div className="flex">
        <div className="flex-grow flex flex-col">
          <span>
            <span className="mr-2">Frachter</span> SST 1
          </span>
          <span>
            <span className="mr-2">Ziel:</span> Sol III
          </span>
          <span>- gelandet -</span>
        </div>
        <Freighter width={2} className="mt-4 mr-4" />
      </div>
      <div className="pt-6">
        <span className="mr-8">Treibstoff:</span>
        <div className="inline-block bg-mercator-gray h-2.5 w-36">
          <div style={{ width: `${progress}%` }} className="bg-mercator-pink h-full" />
        </div>
      </div>
      <div className="pt-6 flex flex-col">
        <div>
          <span className="mr-8">Bewaffnung:</span>
          <span>0</span>
        </div>
        <div>
          <span className="mr-8">Laderaum:</span>
          <span>10</span>
          <span>t</span>
        </div>
        <div className="grid grid-cols-20">
          {new Array(10).fill(1).map((i) => {
            return (
              <div
                key={`l${i}`}
                className="mb-1 mr-1 h-4 lg:h-8 text-xs flex justify-center items-center bg-mercator-gray bg-opacity-25 "
              >
                🌾
              </div>
            );
            return (
              <div
                key={`l${i}`}
                className="mb-1 mr-1 h-4 lg:h-8 text-xs flex justify-center items-center bg-mercator-gray bg-opacity-25 "
              >
                🌾
              </div>
            );
          })}
          {new Array(80).fill(1).map((i) => {
            return <div key={`l${i}`} className="mb-1 mr-1 h-4 lg:h-8  bg-mercator-gray"></div>;
          })}
        </div>
      </div>
    </div>
  );
};
