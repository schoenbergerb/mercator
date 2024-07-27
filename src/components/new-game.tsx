'use client';

import { DosInput } from '@/components/form/dos-input';
import type { SaveGame } from '@/logic/entities/save-game';
import { db } from '@/utils/db';
import { useRouter } from 'next/navigation';

export const NewGame = () => {
  const router = useRouter();
  const onChange = (username: string) => {
    const game: Omit<SaveGame, 'id'> = {
      username,
      money: 10000,
      round: 3000,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const update = db.saveGame.toCollection().modify({ active: false });
    const newGame = db.saveGame.add(game);

    Promise.all([update, newGame]).then(() => router.push('/game'));
  };

  return (
    <div className="text-mercator-green">
      <div>
        Spielername: <DosInput onChange={onChange} />
      </div>
    </div>
  );
};
