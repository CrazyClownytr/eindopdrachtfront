import PlayerList from "./components/PlayerList.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import CreatePlayer from "./components/CreatePlayer.jsx";
import PlayerDetail from "./components/PlayerDetails.jsx";
import Layout from "./components/Layout.jsx";
import UpdatePlayer from "./components/UpdatePlayer.jsx";
import DeletePlayer from "./components/DeletePlayer.jsx";
import NotFoundError from "./components/NotFoundError.jsx";


const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <PlayerList />,
            },

            {
                path: '/create',
                element: <CreatePlayer />,
            },

            {
                path: '/player/:id',
                element: <PlayerDetail />,
            },

            {
                path: '/player/edit/:id',
                element: <UpdatePlayer />,
            },

            {
                path: '/player/delete/:id',
                element: <DeletePlayer />,
            },

            {
                path: '*',
                element: <NotFoundError />,
            },


        ]
    }

]);

function App() {
  return (
      <>
          <RouterProvider router={router}/>
      </>
  )
}

export default App
