import Dexie, { type EntityTable } from 'dexie';
import { SaveGame } from '@/logic/entities/save-game';

import 'dexie-observable';

const db = new Dexie('Mercator') as Dexie & {
  saveGame: EntityTable<SaveGame, 'id'>;
};

db.version(1).stores({
  saveGame: '++id, name, money, active, round, createAt, updatedAt',
});

export { db };
