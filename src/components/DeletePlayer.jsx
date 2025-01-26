import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

function DeletePlayer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        async function fetchPlayer() {
            try {
                const response = await fetch(`http://145.24.223.29:8213/players/${id}`, {
                    method: "GET",
                    headers: { "Accept": "application/json" },
                });

                if (!response.ok) {
                    throw new Error(`Server error: ${response.status}`);
                }

                const data = await response.json();
                setPlayer(data);

            } catch (error) {
                console.error("Fout bij ophalen van speler:", error);
            }
        }
        fetchPlayer();
    }, [id]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://145.24.223.29:8213/players/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Fout bij verwijderen: ${response.status}`);
            }

            console.log("Speler verwijderd");
            navigate("/");

        } catch (error) {
            console.error("Fout bij verwijderen van speler:", error);
        }
    };

    if (!player) {
        return <p>Speler laden...</p>;
    }

    return (
        <div
            className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4 text-center">{player.name}</h2>
            <p className="text-xl text-gray-700 mb-4">Club: {player.club}</p>
            <p className="text-xl text-gray-700 mb-6">Land: {player.country}</p>

            <div
                className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4 text-center">Ben je zeker?</h2>

                <div className="flex justify-center space-x-4">

                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition-all w-1/2"
                    >
                        Ja
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600 transition-all w-1/2"
                    >
                        Nee
                    </button>
                </div>

            </div>


        </div>
    );
}

export default DeletePlayer;
