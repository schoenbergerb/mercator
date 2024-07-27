'use client';

import type { SaveGame } from '@/logic/entities/save-game';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [sound, setSound] = useState<string | null>();
  const [games, setGames] = useState<SaveGame[]>();

  if (!sound) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div>Sound aktivieren?</div>
        <div>
          <label>
            <Link href="/intro">JA</Link>
          </label>
          <label>
            <input type="radio" radioGroup="sound" value="nein" className="hidden" onChange={() => setSound('nein')} />{' '}
            Nein
          </label>
        </div>
      </main>
    );
  }
}
