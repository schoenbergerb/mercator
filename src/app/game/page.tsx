export default function Game() {
    return <div className="flex h-screen w-screen">
        <fieldset className="flex flex-col w-1/3 m-1 border-blue-800 border-2 border-double mt-[15px]">
            <div className=" text-yellow-200 px-2">
                <div className="flex"><span className="flex-grow">Spieler:</span><span>[SPIELERNAME]</span></div>
                <div className="flex"><span className="flex-grow">Zeit:</span><span>[RAUMZEIT]</span></div>
            </div>
            <div className="flex-grow border-t-2 border-double border-blue-800 text-blue-800">
                <div className="px-8">LAGERBESTAND</div>
                <div className="px-2 text-cyan-400"><span className="mr-5">Vermögen:</span>[MONEY]</div>
            </div>
            <div className="h-1/4 border-t-2 border-double border-blue-800 px-2 text-gray-400">
                Aktion:<br />
                Weiter zum nächsten Spieler
            </div>
        </fieldset>
        <div className="w-2/3 flex flex-col">
            <fieldset className="h-1/4 border-2 border-green-600 border-double m-1 ml-0">
                <legend className="text-center px-2 text-green-600">$$$ MARKT - BÖRSE $$$</legend>
            </fieldset>
            <fieldset className="flex-grow border-2 border-pink-500 border-double m-1 mt-0 ml-0">
                <legend className="text-center px-2 text-pink-500">+++ Nachrichten +++ Nachrichten +++</legend>
            </fieldset>
        </div>
    </div>
}
