'use client';

import { useEffect, useState } from 'react';
import { menuEntries } from './menu-entries';

type Props = {
  locked: boolean;
  onMenuItemChange: (menuItem: string) => void;
};

export const ActionMenu = ({ locked, onMenuItemChange }: Props) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const action = ({ key }: KeyboardEvent) => {
    if (locked) {
      return;
    }
    switch (key) {
      case 'ArrowLeft':
        return setSelectedMenuItem(selectedMenuItem > 0 ? selectedMenuItem - 1 : selectedMenuItem);

      case 'ArrowRight':
        return setSelectedMenuItem(selectedMenuItem < menuEntries.length - 1 ? selectedMenuItem + 1 : selectedMenuItem);

      case 'Enter':
        return onMenuItemChange(menuEntries[selectedMenuItem].id);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', action);
    return () => window.removeEventListener('keydown', action);
  }, [action]);

  return (
    <div className="h-1/4 border-t-4 border-double border-mercator-blue px-2 text-mercator-gray">
      Aktion:
      <br />
      {menuEntries[selectedMenuItem].name}
    </div>
  );
};
