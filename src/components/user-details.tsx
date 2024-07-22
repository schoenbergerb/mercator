"use client";

import { SaveGame } from "@/logic/entities/save-game";

type Props = {
  game?: SaveGame;
};

export const UserDetails = ({ game }: Props) => {
  console.log(game);
  return (
    <div className=" text-mercator-yellow px-2">
      <div className="flex">
        <span className="flex-grow">Spieler:</span>
        <span>{game?.username}</span>
      </div>
      <div className="flex">
        <span className="flex-grow">Zeit:</span>
        <span>{game?.round}</span>
      </div>
      <div className="flex text-mercator-cyan">
        <span className="flex-grow">Vermögen:</span>
        <span>{game?.money}</span>
      </div>
    </div>
  );
};
