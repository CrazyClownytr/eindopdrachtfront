import { useState } from 'react'
import PlayerItem from './PlayerItem.jsx'
import RandomPlayerButton from "./components/RandomPlayerButton.jsx";
import PlayerList from "./components/PlayerList.jsx";
// import {createBrowserRouter, RouterProvider} from "react-router";

// const router = createBrowserRouter([
//     {
//         element: <Layout/>,
//         children: [
//             {
//                 path: '/',
//                 element: <Home/>,
//             },
//             {
//                 path: '/create',
//                 element: <CreateProduct/>,
//             },
//
//             {
//                 path: '/products/:id',
//                 element: <ProductDetail/>,
//             },
//         ]
//     }
// ]);

function App() {
    const InitialPlayers = [
        { id: 1, name: 'Messi', club: 'Inter Miami', country: 'Argentina' },
        { id: 2, name: 'Pedri', club: 'Barcelona', country: 'Spain' },
        { id: 3, name: 'Lamine', club: 'Barcelona', country: 'Spain' },
    ];

  const [players, setPlayers] = useState(InitialPlayers);

  const addRandomPlayer = () => {
      const newPlayer = {
          id: players.length + 1,
          name: "Random Player",
          club: "Unknown Club",
          country: "Unknown Country"
      };

      setPlayers([...players, newPlayer])
  }
  return (
      <>
          <div>
              <h2>Spelers</h2>
              <ul>
                  {players.map((player) => (
                      // <li key={player.id}> {player.name}</li>
                      <PlayerItem key={player.id} item={player} />
                  ))}
              </ul>
          </div>
          <RandomPlayerButton onButtonClick={addRandomPlayer}/>
<div>
    <h1>Voetbalspelers API</h1>
    <PlayerList  setPlayers={players} />
</div>

{/*<div>*/}
{/*    <RouterProvider router={router} />;*/}
{/*</div>*/}

      </>
  )
}

export default App
