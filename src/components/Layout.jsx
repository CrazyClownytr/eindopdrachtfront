import { Outlet, Link } from "react-router";

function Layout() {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-600 p-4 shadow-lg">
                    <div className="space-x-4">
                        <Link to="/" className="text-white hover:underline">Home</Link>
                        <Link to="/players" className="text-white hover:underline">Players</Link>
                        <Link to="/create" className="text-white hover:underline">Nieuwe Speler</Link>
                    </div>
            </nav>

            <main className="container mx-auto p-6">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
