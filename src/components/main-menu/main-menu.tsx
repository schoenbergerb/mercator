import { News } from '@/components/main-menu/news';
import { Docks } from '@/components/main-menu/docks';

type Props = {
  activeMenu: string | null;
};

export const MainMenu = ({ activeMenu }: Props) => {
  switch (activeMenu) {
    case 'docks':
      return <Docks />;

    default:
      return <News />;
  }
};
