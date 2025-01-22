// les2.1

import {useEffect, useState} from "react";
import PlayerItem from "../PlayerItem.jsx";
import CreatePlayer from "./CreatePlayer.jsx";

function PlayerList() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchPlayers() {
            try {
                const response = await fetch('http://145.24.223.29:7213/players', {
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

    const handlePlayerAdded = (newPlayer) => {
        setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    };

    console.log('players', players);
    return (
        <div>
            {players.length ? (
                <ul>
                    {players.map((player) => (
                        // <li key={player.id}> {player.name}</li>
                        <PlayerItem key={player.id} item={player}/>
                    ))}
                </ul>
            ) : (
                <p>Product laden...</p>
            )}

            <CreatePlayer onPlayerAdded={handlePlayerAdded} />
        </div>


    );
}

export default PlayerList;
