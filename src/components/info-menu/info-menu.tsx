import { ShipsMenu } from '@/components/info-menu/ships-menu';
import { StockMenu } from '@/components/info-menu/stock-menu';
import { Ship } from '@/logic/entities/ship';
import { ShipType } from '@/logic/enum/ship-type.enum';
import { Goods } from '@/logic/entities/goods.enum';

type Props = {
  activeMenu: string | null;
};

export const InfoMenu = ({ activeMenu }: Props) => {
  const ship: Ship = {
    id: '123',
    type: ShipType.FREIGHTER,
    cargo: {
      max: 100,
      usage: {
        [Goods.WHEAT]: 18,
        [Goods.ALKARKOTICA]: 10,
      },
    },
    fuelMax: 30,
    fuelLeft: 29,
    gameId: 1,
    weapons: 0,
    position: { x: 0, y: 0 },
  };

  if (activeMenu === 'ships' || true) {
    return <ShipsMenu ship={ship} />;
  }
  return <StockMenu />;
};
