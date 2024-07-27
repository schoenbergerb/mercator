export type MenuEntry = {
  id: string;
  name: string;
  action: () => void;
};

export const menuEntries: MenuEntry[] = [
  {
    id: 'forward',
    name: 'Weiter zum nächsten Spieler',
    action: () => console.log('weiter'),
  },
  {
    id: 'ships',
    name: 'Raumschiffe anweisen',
    action: () => console.log('schiffe'),
  },
  {
    id: 'docks',
    name: 'Spacedocks anfunken',
    action: () => console.log('docks'),
  },
  {
    id: 'sell',
    name: 'Waren verkaufen',
    action: () => console.log('verkaufen'),
  },
  {
    id: 'state',
    name: 'Status anzeigen',
    action: () => console.log('docks'),
  },
  {
    id: 'map',
    name: 'Liste der Sternensysteme',
    action: () => console.log('map'),
  },
];
