import {Link} from "react-router";


function PlayerItem ({item}) {
return (
    <div className="flex justify-center p-4">
        <article key={item.id}
                 className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-between text-center w-[300px]">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">{item.name}</h2>
            <Link to={`/player/${item.id}`}>
                <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all">Details
                </button>
            </Link>
        </article>
    </div>


)
}

export default PlayerItem;
