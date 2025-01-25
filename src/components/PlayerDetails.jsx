import { useParams } from "react-router";
import { useEffect, useState } from "react";

function PlayerDetail() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        async function fetchPlayer() {
            try {
                const response = await fetch(`http://145.24.223.29:8213/players/${id}`, {

                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                const data = await response.json();
                setPlayer(data);

            } catch (error) {
                console.error("Fout bij het ophalen van de speler:", error);
            }
        }
        fetchPlayer();
    }, [id]);

    if (!player) {
        return <p>Speler laden...</p>;
    }

    return (
        <div>
            <h2>{player.name}</h2>
            <p>Club: {player.club}</p>
            <p>Land: {player.country}</p>
        </div>
    );
}

export default PlayerDetail;
