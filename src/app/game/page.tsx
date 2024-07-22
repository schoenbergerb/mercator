"use client";

import { StockExchange } from "@/components/stock-exchange";
import { News } from "@/components/news";
import { UserDetails } from "@/components/user-details";
import { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { useRouter } from "next/navigation";
import { SaveGame } from "@/logic/entities/save-game";

export default function Game() {
  const router = useRouter();
  const [game, setSaveGame] = useState<SaveGame | undefined>();

  const fetchGame = () => {
    db.saveGame
      .filter((e) => e.active)
      .first()
      .then(setSaveGame)
      .catch(() => router.push("/intro"));
  };

  useEffect(() => {
    fetchGame();

    db.on("changes", () => {
      fetchGame();
    });
  }, []);

  return (
    <div className="flex h-screen w-screen">
      <fieldset className="flex flex-col w-1/3 m-1 border-mercator-blue border-4 border-double mt-[14px]">
        <UserDetails game={game} />
        <div className="flex-grow border-t-4 border-double border-mercator-blue text-mercator-blue">
          <div className="px-2 pt-1">LAGERBESTAND</div>
          <div className="px-2 text-mercator-cyan">
            <span className="mr-5">Vermögen:</span>
            {game?.money}
          </div>
        </div>
        <div className="h-1/4 border-t-4 border-double border-mercator-blue px-2 text-mercator-gray">
          Aktion:
          <br />
          Weiter zum nächsten Spieler
        </div>
      </fieldset>
      <div className="w-2/3 flex flex-col">
        <StockExchange game={game} />
        <News />
      </div>
    </div>
  );
}
