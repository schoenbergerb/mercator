import { ShipsMenu } from '@/components/info-menu/ships-menu';
import { StockMenu } from '@/components/info-menu/stock-menu';

type Props = {
  activeMenu: string | null;
};

export const InfoMenu = ({ activeMenu }: Props) => {
  if (activeMenu === 'ships' || true) {
    return <ShipsMenu />;
  }
  return <StockMenu />;
};
