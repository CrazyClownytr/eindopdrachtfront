import {useState} from 'react';
import {useNavigate} from "react-router";

function CreatePlayer() {
    const [formData, setFormData] = useState({
        name: '',
        club: '',
        country: '',
    });
    const navigate = useNavigate();

    // Generieke handler voor het bijwerken van de state
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://145.24.223.29:8213/players', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const newPlayer = await response.json();
            console.log('Speler toegevoegd:', newPlayer);


            // Reset het formulier
            setFormData({ name: '', club: '', country: '' });

            // Navigeer terug naar de homepagina
            navigate("/");

        } catch (error) {
            console.error('Fout bij het toevoegen van de speler:', error);
        }
    };

    return (


        <form onSubmit={handleSubmit}>
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
                <label htmlFor="email">Club:</label>
                <input
                    type="text"
                    id="club"
                    name="club"
                    value={formData.club}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="email">Country:</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Verzenden</button>
        </form>
    );
}

export default CreatePlayer;
