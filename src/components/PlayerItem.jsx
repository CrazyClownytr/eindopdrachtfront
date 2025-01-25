import {Link} from "react-router";


function PlayerItem ({item}) {
return (
    <article className="bg-white p-4 rounded-lg shadow-lg mb-4 hover:bg-gray-100 transition-all">
        <h2 className="text-2xl font-semibold text-blue-600">{item.name}</h2>
        {/*<p className="text-lg text-gray-800">Club: {item.club}</p>*/}
        {/*<p className="text-lg text-gray-800">Country: {item.country}</p>*/}
        {/*<p className="text-sm text-gray-500">ID: {item.id}</p>*/}
        <Link to={`/player/${item.id}`}>
            <button>Details</button>
        </Link>
    </article>
)
}

export default PlayerItem;
