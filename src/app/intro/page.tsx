"use client";

import { useEffect, useState } from "react";
import SelectYesNo from "@/components/form/select-yes-no";
import { LoadGame } from "@/components/load-game";
import { NewGame } from "@/components/new-game";

export default function Intro() {
  const [newGame, setNewGame] = useState<boolean | undefined>();
  const [title, setTitle] = useState("");

  console.log(newGame);

  useEffect(() => {
    (async () => {
      let i = 0;
      const t = "M e r c a t o r";
      let titleNew = "";
      const interval = window.setInterval(() => {
        console.log(i);
        if (i >= t.length - 1) {
          clearInterval(interval);
        }
        titleNew += t[i];
        setTitle(titleNew);
        i++;
      }, 175);
    })();

    return () => {};
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <audio src="/audio/intro.mp3" autoPlay />
      <div className="flex w-screen text-mercator-darkblue p-1 mb-10">
        <div className="w-1/5">Johny&apos;s</div>
        <div className="flex-grow text-center">Remake by Berny</div>
        <div className="w-1/5 text-right">Version: 2.9</div>
      </div>
      <div className="w-screen text-center">
        <h1 className="text-mercator-cyan uppercase"> {title}</h1>
        <div className="text-mercator-cyan uppercase">===================</div>
      </div>
      <div className="w-2/3 border-mercator-green border h-12 mt-12"></div>
      <div className="mt-12">
        {newGame === undefined ? (
          <SelectYesNo
            label="Neues Spiel?"
            name="new-game"
            onChange={setNewGame}
            className="w-1/2 mt-20 text-left"
          />
        ) : newGame ? (
          <NewGame />
        ) : (
          <LoadGame />
        )}
      </div>
      <div className="flex-grow"></div>
    </main>
  );
}
