'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  onChange: (value: string) => void;
};

export const DosInput = ({ onChange }: Props) => {
  const [playerName, setPlayerName] = useState('');

  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

  return (
    <div className="inline-block group w-64 h-6 cursor-pointer">
      <input
        ref={input}
        value={playerName}
        className="outline-none opacity-0 absolute"
        onKeyDown={({ key }) => key === 'Enter' && onChange(playerName)}
        onChange={(e) => setPlayerName(e.currentTarget.value)}
        onLoad={(e) => e.currentTarget.focus()}
      />
      <div className="flex align-middle h-4">
        <span className="text-mercator-yellow">{playerName}</span>
        <pre className="bg-mercator-green hidden group-focus-within:block w-2.5 h-6 animate-blink" />
      </div>
    </div>
  );
};
