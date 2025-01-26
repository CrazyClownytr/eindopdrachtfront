import {Outlet} from 'react-router';
import {Link} from "react-router";



function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    {/*<Link to="/players">Players</Link>*/}
                    <Link to="/create">Create New Player</Link>
                </nav>
            </header>
            <main>
            <Outlet/>
            </main>
        </div>
    );
}

export default Layout;
