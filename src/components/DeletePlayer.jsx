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
        if (!window.confirm("Weet je zeker dat je deze speler wilt verwijderen?")) return;

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
        <div>
            <h2>{player.name}</h2>
            <p>Club: {player.club}</p>
            <p>Land: {player.country}</p>

            <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>
                Bevestig Verwijderen
            </button>

            <button onClick={() => navigate(-1)} style={{ marginLeft: "10px" }}>
                Annuleren
            </button>
        </div>
    );
}

export default DeletePlayer;
