import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-semibold text-red-500 mb-4 text-center">404 - Pagina niet gevonden</h2>
            <p className="text-xl text-gray-700 mb-6 text-center">De pagina die je zoekt bestaat niet.</p>
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

export default NotFound;
