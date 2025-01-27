import {useState} from 'react';
import {useNavigate} from "react-router";

function CreatePlayer() {
    const [formData, setFormData] = useState({
        name: '',
        club: '',
        country: '',
    });
    const navigate = useNavigate();

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


            // reset form
            setFormData({ name: '', club: '', country: '' });


            navigate("/players");

        } catch (error) {
            console.error('Fout bij het toevoegen van de speler:', error);
        }
    };

    return (

        <form onSubmit={handleSubmit}
              className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Speler Toevoegen</h2>

            <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Naam:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="club" className="block text-lg font-medium text-gray-700">Club:</label>
                <input
                    type="text"
                    id="club"
                    name="club"
                    value={formData.club}
                    onChange={handleInputChange}
                    className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="country" className="block text-lg font-medium text-gray-700">Land:</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="mt-2 block w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all w-full sm:w-auto"
                >
                    Verzenden
                </button>
            </div>
        </form>


    );
}

export default CreatePlayer;
