import type { SaveGame } from '@/logic/entities/save-game';

type Props = {
  game?: SaveGame;
};

export const StockExchange = ({ game }: Props) => {
  return (
    <fieldset className="h-1/4 border-4 border-mercator-green border-double m-1 ml-0">
      <legend className="text-center px-2 text-mercator-green">$$$ M A R K T - B Ö R S E $$$</legend>
    </fieldset>
  );
};
