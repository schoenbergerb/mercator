'use client';

import { Freighter } from '@/components/ships/freighter';
import { useEffect } from 'react';
import { Ship } from '@/logic/entities/ship';
import { Goods } from '@/logic/entities/goods.enum';

type Props = { ship: Ship };

export const ShipsMenu = ({ ship }: Props) => {
  useEffect(() => {}, []);

  const unusedCargo = ship.cargo.max - Object.values(ship.cargo.usage).reduce((p, c) => p + c, 0);

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
          <div
            style={{ width: `${(ship.fuelLeft / ship.fuelMax) * 100}%` }}
            className="bg-mercator-pink h-full min-w-[1px]"
          />
        </div>
      </div>
      <div className="pt-6 flex flex-col">
        <div>
          <span className="mr-8">Bewaffnung:</span>
          <span>{ship.weapons}</span>
        </div>
        <div>
          <span className="mr-8">Laderaum:</span>
          <span>{ship.cargo.max}</span>
          <span>t</span>
        </div>
        <div className="grid grid-cols-20">
          {Object.keys(ship.cargo.usage).map((k: any) => {
            const length = ship.cargo.usage[k as Goods] as number;

            return Array.from({ length }).map((i) => (
              <div
                key={`g-${k}-${i}`}
                className="mb-1 mr-1 h-4 lg:h-8 text-xs flex justify-center items-center bg-mercator-gray bg-opacity-25 lg:text-md xl:text-lg"
              >
                {k}
              </div>
            ));
          })}
          {Array.from({ length: unusedCargo }).map((i) => (
            <div key={`l${i}`} className="mb-1 mr-1 h-4 lg:h-8 bg-mercator-gray"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
