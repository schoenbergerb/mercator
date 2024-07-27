import type { Entity } from './entity.interface';

export interface SaveGame extends Omit<Entity, 'gameId'> {
  username: string;

  money: number;

  round: number;

  active: boolean;

  createdAt: Date;

  updatedAt: Date;
}
