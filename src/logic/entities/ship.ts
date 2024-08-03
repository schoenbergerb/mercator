import type { Entity } from '@/logic/entities/entity.interface';
import type { ShipType } from '@/logic/enum/ship-type.enum';
import type { Position } from '@/logic/entities/position';
import { Goods } from '@/logic/entities/goods.enum';

export interface Ship extends Entity {
  type: ShipType;

  weapons: number;

  cargo: {
    max: number;
    usage: Partial<Record<Goods, number>>;
  };

  fuelMax: number;

  fuelLeft: number;

  position: Position;
}
