import { Link } from 'react-router';

function HomePage() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <h1 className="text-4xl font-semibold text-center text-blue-600 mb-6">
                Welcome to PlayerPick
            </h1>

            <p className="text-xl text-gray-700 mb-6">
                Welcome to PlayerPick, your ultimate destination for discovering and sharing your favorite football players. Whether you're a football fanatic or just a casual fan, this platform allows you to create and showcase your favorite players, and explore the top picks of other football lovers.
            </p>

            <p className="text-xl text-gray-700 mb-6">
                Create your own collection of football players, add detailed information about them, and share it with others. Get inspired by seeing the favorites of fellow football enthusiasts and explore detailed profiles of these iconic players. Whether you're interested in a player's career, stats, or simply want to admire their playing style, PlayerPick has all the information you need in one place.
            </p>

            <p className="text-xl text-gray-700 mb-6">
                It's not just about the game – it's about connecting with others through a shared passion for football. Discover new players, interact with other users, and dive into the rich world of football. Get started by adding your own favorite players and see how others showcase their football legends.
            </p>

            <div className="flex justify-center mt-8">
                <Link
                    to="/create"
                    className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all w-full sm:w-auto"
                >
                    Create Your Favorite Football Player
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
