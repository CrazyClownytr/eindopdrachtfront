import {Link, useParams} from "react-router";
import { useEffect, useState } from "react";

function PlayerDetail() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    // const [loading, setLoading] = useState(true);

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
                // setLoading(false);
            }
        }
        fetchPlayer();
    }, [id]);

    // if (loading) {
    //     return <p>Speler laden...</p>;
    // }

    if (!player) {
        return <p>Speler niet gevonden.</p>;
    }

    return (
        <div>

            <h2>{player.name}</h2>
            <p>Club: {player.club}</p>
            <p>Land: {player.country}</p>


            <Link to={`/player/edit/${id}`}>
                <button>Speler bewerken</button>
            </Link>

            <Link to={`/player/delete/${id}`}>
                <button>Verwijder Speler</button>
            </Link>
        </div>
    );
}

export default PlayerDetail;
