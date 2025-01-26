import {useEffect, useState} from "react";
import PlayerItem from "./PlayerItem.jsx";

function PlayerList() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchPlayers() {
            try {
                const response = await fetch('http://145.24.223.29:8213/players', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    }
                });

                const data = await response.json();
                setPlayers(data.items);

            } catch (error) {
                console.error('Fout bij het ophalen van de spelers:', error);
            }
        }

        fetchPlayers();
    }, []);

    console.log('players', players);
    return (
        <div>
            {players.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {players.map((player) => (
                        <PlayerItem key={player.id} item={player}/>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">Players laden...</p>
            )}
        </div>


    );
}

export default PlayerList;
