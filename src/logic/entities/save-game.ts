import { Entity } from "@/logic/entities/entity.interface";

export interface SaveGame extends Entity {
  id: number;

  username: string;

  money: number;

  round: number;

  active: boolean;

  createdAt: Date;

  updatedAt: Date;
}
