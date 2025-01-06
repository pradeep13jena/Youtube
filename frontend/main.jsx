import { createRoot } from 'react-dom/client'
import App from './src/components/App'
import "./src/styles/index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Playlist from './src/components/Playlist'
import Channel from './src/components/channel'
import Home from './src/components/Home'
import Watch from './src/components/Watch'
import { store } from './src/features/store'
import { Provider } from 'react-redux'
import Account from './src/components/Account'
import { Subscriptions } from '@mui/icons-material'
import PlaylistViewer from './src/components/PlaylistViewer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      }, 
      {
        path: "/videos/watch?",
        element: <Watch/>
      },
      {
        path: '/channel/:channel',
        element: <Channel/>
      },
      {
        path: '/feed/playlists',
        element: <PlaylistViewer/>
      },
      {
        path: '/feed/subscriptions',
        element: <Subscriptions/>
      },
      {
        path: "/playlist/:playlist",
        element: <Playlist/>
      },
      {
        path: '/feed/you',
        element: <Account/>
      }
    ]
  }
])

const root = createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);