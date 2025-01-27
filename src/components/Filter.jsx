import { useState } from 'react';

function PlayerFilter({ onFilter }) {
    const [club, setClub] = useState('');
    const [country, setCountry] = useState('');

    const handleFilterChange = () => {
        onFilter({ club, country });
    };

    return (
        <div className="flex justify-center gap-4 mb-6">
            <input
                type="text"
                value={club}
                onChange={(e) => setClub(e.target.value)}
                placeholder="Zoek op club"
                className="p-3 rounded-md border border-gray-300"
            />

            <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Zoek op land"
                className="p-3 rounded-md border border-gray-300"
            />

            <button
                onClick={handleFilterChange}
                className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
                Filteren
            </button>
        </div>
    );
}

export default PlayerFilter;
