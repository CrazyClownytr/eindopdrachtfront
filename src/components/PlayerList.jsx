import {useEffect, useState} from "react";
import PlayerItem from "./PlayerItem.jsx";
import PlayerFilter from "./Filter.jsx";

function PlayerList() {

    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);

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
                setFilteredPlayers(data.items);

            } catch (error) {
                console.error('Fout bij het ophalen van de spelers:', error);
            }
        }

        fetchPlayers();
    }, []);

    const handleFilter = (filter) => {
        const filtered = players.filter((player) => {
            return (
                (filter.club ? player.club.toLowerCase().includes(filter.club.toLowerCase()) : true) &&
                (filter.country ? player.country.toLowerCase().includes(filter.country.toLowerCase()) : true)
            );
        });
        setFilteredPlayers(filtered);
    };

    console.log('players', players);
    return (
        <div>

            <PlayerFilter onFilter={handleFilter} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredPlayers.length > 0 ? (
                    filteredPlayers.map((player) => (
                        <PlayerItem key={player.id} item={player} />
                    ))
                ) : (
                    <p className="text-center text-gray-600">Geen spelers gevonden...</p>
                )}
            </div>

            {!players.length && (
                <p className="text-center text-gray-600">Players laden...</p>
            )}
        </div>


    );
}

export default PlayerList;
