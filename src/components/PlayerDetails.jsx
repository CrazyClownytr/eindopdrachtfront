import {Link, useParams} from "react-router";
import { useEffect, useState } from "react";

function PlayerDetail() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPlayer() {
            setLoading(true);
            try {
                //await new Promise(resolve => setTimeout(resolve, 3000)); //testing loading
                const response = await fetch(`http://145.24.223.29:8213/players/${id}`, {

                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Speler met ID ${id} niet gevonden.`);
                }

                const data = await response.json();
                setPlayer(data);

            } catch (error) {
                console.error("Fout bij het ophalen van de speler:", error);
                setError(error.message);
            } finally { //zorgt ervoor dat loading altijd uitgezet wordt
                setLoading(false);
            }
        }
        fetchPlayer();
    }, [id]);

    if (loading) {
        return <p>Speler laden...</p>;
    }

    if (error) {
        return (
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-semibold text-red-500 mb-4 text-center">Fout!</h2>
                <p className="text-xl text-gray-700 mb-6 text-center">{error}</p>
                <div className="flex justify-center space-x-4">
                    <Link
                        to="/"
                        className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all w-full sm:w-auto text-center"
                    >
                        Terug naar Home
                    </Link>
                </div>
            </div>
        );
    }

    if (!player) {
        return <p>Speler niet gevonden.</p>;
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4 text-center">{player.name}</h2>

            <p className="text-xl mb-4">
                <strong>Club:</strong> {player.club}
            </p>
            <p className="text-xl mb-6">
                <strong>Land:</strong> {player.country}
            </p>

            <div className="flex justify-center gap-4">
                <Link to={`/player/edit/${id}`}>
                    <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all">
                        Speler bewerken
                    </button>
                </Link>

                <Link to={`/player/delete/${id}`}>
                    <button className="bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition-all">
                        Verwijder Speler
                    </button>
                </Link>
            </div>
        </div>
    );

}

export default PlayerDetail;
