import { ShipType } from '@/logic/enum/ship-type.enum';

type ShipDefaults = {
  weapons: number;
  cargo: number;
  fuel: number;
};

export const ShipDefaults: Record<ShipType, ShipDefaults> = {
  [ShipType.FREIGHTER]: {
    weapons: 0,
    cargo: 10,
    fuel: 30,
  },
  [ShipType.CRUISER]: {
    weapons: 2,
    cargo: 0,
    fuel: 30,
  },
  [ShipType.SCOUT]: {
    weapons: 0,
    cargo: 0,
    fuel: 50,
  },
  [ShipType.TANKER]: {
    weapons: 0,
    cargo: 10,
    fuel: 30,
  },
  [ShipType.STATION]: {
    weapons: 0,
    cargo: 90,
    fuel: 0,
  },
};
