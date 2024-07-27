import type { Entity } from '@/logic/entities/entity.interface';
import type { ShipType } from '@/logic/enum/ship-type.enum';
import type { Position } from '@/logic/entities/position';

export interface Ship extends Entity {
  type: ShipType;

  weapons: number;

  cargo: number;

  fuel: number;

  position: Position;
}
