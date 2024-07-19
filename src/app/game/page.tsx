export default function Game() {
    return <div className="flex h-screen w-screen">
        <fieldset className="flex flex-col w-1/3 m-1 border-mercator-blue border-4 border-double mt-[14px]">
            <div className=" text-mercator-yellow px-2">
                <div className="flex"><span className="flex-grow">Spieler:</span><span>[SPIELERNAME]</span></div>
                <div className="flex"><span className="flex-grow">Zeit:</span><span>[RAUMZEIT]</span></div>
            </div>
            <div className="flex-grow border-t-4 border-double border-mercator-blue text-mercator-blue">
                <div className="px-8">LAGERBESTAND</div>
                <div className="px-2 text-mercator-cyan"><span className="mr-5">Vermögen:</span>[MONEY]</div>
            </div>
            <div className="h-1/4 border-t-4 border-double border-mercator-blue px-2 text-mercator-gray">
                Aktion:<br />
                Weiter zum nächsten Spieler
            </div>
        </fieldset>
        <div className="w-2/3 flex flex-col">
            <fieldset className="h-1/4 border-4 border-mercator-green border-double m-1 ml-0">
                <legend className="text-center px-2 text-mercator-green">$$$ M A R K T - B Ö R S E $$$</legend>
            </fieldset>
            <fieldset className="flex-grow border-4 border-mercator-pink border-double m-1 mt-0 ml-0 text-center">
                <legend className="text-center px-2 text-mercator-pink">+++ Nachrichten +++ Nachrichten +++</legend>
                <div className="text-mercator-red">-- keine aktuellen Meldungen --</div>
            </fieldset>
        </div>
    </div>
}
