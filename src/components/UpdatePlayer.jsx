import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";

function UpdatePlayer() {
    const { id } = useParams(); // Haal het ID uit de URL
     const navigate = useNavigate(); // Om terug te navigeren na de update
    const [formData, setFormData] = useState({
        name: "",
        club: "",
        country: "",
    });

    // 🟢 Haal de huidige speler op en vul het formulier vooraf in
    useEffect(() => {
        async function fetchPlayer() {
            try {
                const response = await fetch(`http://145.24.223.29:8213/players/${id}`, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json", // 👈 Voegt de juiste accept-header toe
                    },
                });

                if (!response.ok) {
                    throw new Error(`Server error: ${response.status}`);
                }

                const data = await response.json();
                setFormData(data); // ✅ Vul het formulier correct in

            } catch (error) {
                console.error("Fout bij ophalen van speler:", error);
            }
        }
        fetchPlayer();
    }, [id]);


    // 🔄 Verwerk veranderingen in het formulier
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // 🟢 PUT-verzoek versturen om de speler te updaten
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://145.24.223.29:8213/players/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Speler succesvol bijgewerkt!");
                 navigate(`/player/${id}`); // Ga terug naar de detailpagina
            } else {
                console.error("Fout bij het updaten van de speler:", response.statusText);
            }
        } catch (error) {
            console.error("Er is een fout opgetreden:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Speler bewerken</h2>

            <div>
                <label htmlFor="name">Naam:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="club">Club:</label>
                <input
                    type="text"
                    id="club"
                    name="club"
                    value={formData.club}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="country">Land:</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Opslaan</button>
        </form>
    );
}

export default UpdatePlayer;
