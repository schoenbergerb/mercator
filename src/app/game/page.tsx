'use client';

import { ActionMenu, type MenuEntry } from '@/components/action-menu';
import { InfoMenu } from '@/components/info-menu/info-menu';
import { MainMenu } from '@/components/main-menu/main-menu';
import { StockExchange } from '@/components/stock-exchange';
import { UserDetails } from '@/components/user-details';
import type { SaveGame } from '@/logic/entities/save-game';
import { db } from '@/utils/db';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function Game() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<MenuEntry['id'] | null>(null);
  const [game, setSaveGame] = useState<SaveGame | undefined>();

  const fetchGame = useCallback(() => {
    db.saveGame
      .filter((e) => e.active)
      .first()
      .then(setSaveGame)
      .catch(() => router.push('/intro'));
  }, [router.push]);

  useEffect(() => {
    fetchGame();

    db.on('changes', () => {
      fetchGame();
    });
  }, [fetchGame]);

  return (
    <div className="flex h-screen w-screen">
      <fieldset className="flex flex-col w-1/3 m-1 border-mercator-blue border-4 border-double mt-[14px]">
        <UserDetails game={game} />
        <InfoMenu activeMenu={activeMenu} />
        <ActionMenu onMenuItemChange={setActiveMenu} locked={activeMenu !== null} />
      </fieldset>
      <div className="w-2/3 flex flex-col">
        <StockExchange game={game} />
        <MainMenu />
      </div>
    </div>
  );
}
