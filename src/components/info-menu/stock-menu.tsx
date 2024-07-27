import { Freighter } from '@/components/ships/freighter';

export const StockMenu = () => {
  return (
    <div className="flex-grow border-t-4 border-double border-mercator-blue text-mercator-blue">
      <div className="px-2 pt-1">LAGERBESTAND</div>
      <div className="text-mercator-pink text-center mt-12">--- das Lager ist leer ---</div>
      <Freighter width={10} />
    </div>
  );
};
